# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Cloudflare Worker written in TypeScript that implements OpenPIMS cookie filtering for GDPR compliance. The worker intercepts requests, filters cookies based on configurable allow-lists, and provides a user-friendly UI for cookie consent management.

## Commands

- **Development**: `npm run dev` - Start local development server with Wrangler
- **Deploy**:
  - `npm run deploy` - Deploy to default environment
  - `npm run deploy:staging` - Deploy to staging environment
  - `npm run deploy:production` - Deploy to production environment

## Architecture

### Main Entry Point
- `src/index.ts` - Single-file TypeScript worker implementation with all logic
- `tsconfig.json` - TypeScript configuration with strict mode and Cloudflare Workers types

### Core Logic Flow

1. **Request Interception**: Worker checks for OpenPIMS signals via two methods:
   - **Method 1: X-OpenPIMS Header** (Chrome, Firefox, Chromium): `X-OpenPIMS: https://token.openpims.de`
   - **Method 2: User-Agent Signal** (Safari): `Mozilla/5.0 (...) OpenPIMS/1.0 (+https://token.openpims.de)`
   - **Fallback**: `x-openpims` cookie (legacy support)
2. **Accept All Cookies Mode**:
   - If `accept_all_cookies=1` query param is present, sets `openpims_accept_all_cookies` cookie and bypasses filtering
   - If `openpims_accept_all_cookies` cookie exists, shows cookie management button and bypasses filtering
3. **No OpenPIMS Detection**: If no OpenPIMS header/user-agent detected, shows overlay popup with two options:
   - "Alle Cookies akzeptieren" button - Sets accept-all cookie
   - "Cookie-Einstellungen öffnen" link - Opens OpenPIMS configuration page
4. **OpenPIMS User Flow**: If OpenPIMS detected, adds fixed cookie management button (bottom-right) that links to OpenPIMS
5. **EU Detection**: Uses Cloudflare's `request.cf.country` to detect EU requests
6. **Cookie Filtering**:
   - Fetches allowed cookies from `OPENPIMS_CONFIG_URL` or `https://{domain}/openpims.json`
   - Only filters cookies for EU requests
   - Filters `set-cookie` headers in response, keeping only allowed cookies

### Configuration Sources

The worker determines the cookie configuration URL in this priority order:

1. **X-OpenPIMS Header** (Chrome, Firefox, Chromium)
   - Header: `X-OpenPIMS: https://token.openpims.de`
2. **User-Agent Signal** (Safari)
   - Pattern: `OpenPIMS/1.0 (+https://token.openpims.de)`
   - Extracted via `parseOpenPIMSFromUserAgent()` using regex: `/OpenPIMS\/[\d.]+\s+\(\+([^)]+)\)/`
   - Safari doesn't support custom header modification, so User-Agent is used instead
3. **x-openpims Cookie** (legacy fallback)
4. **OPENPIMS_CONFIG_URL** environment variable (set in wrangler.toml)
5. **Default**: `https://{request-domain}/openpims.json`

Configuration format supports:
- Array: `["cookie1", "cookie2"]`
- Object: `{"allowed_cookies": ["cookie1", "cookie2"]}`

### Key Functions

- `handleRequest()` - Main request handler with redirect, accept-all, and filtering logic
- `getAllowedCookies(url)` - Fetches and parses cookie configuration
- `getCookieName(cookieHeader)` - Extracts cookie name from Set-Cookie header
- `getCookieValue(cookieString, cookieName)` - Extracts a specific cookie value from the Cookie header
- `parseOpenPIMSFromUserAgent(userAgent)` - Extracts OpenPIMS URL from User-Agent string (Safari support)
  - Pattern: `/OpenPIMS\/[\d.]+\s+\(\+([^)]+)\)/`
  - Returns URL or null if not found
- `isRequestFromEU(request)` - Checks if request originates from EU country

### Environment Variables

Configured in `wrangler.toml`:
- `OPENPIMS_CONFIG_URL` - Custom URL for fetching allowed cookies list
- `ENVIRONMENT` - Set to "staging" or "production" based on deployment environment

### UI Components

The worker injects HTML/JavaScript for cookie management:

1. **Overlay Popup** (non-OpenPIMS users):
   - Full-screen overlay with OpenPIMS logo
   - Two action buttons for accept-all or configure
   - Only shown on HTML responses when no OpenPIMS detected

2. **Cookie Management Button** (accept-all cookie users):
   - Fixed position (bottom-right) button
   - Opens popup to change settings
   - Popup allows switching to OpenPIMS management

3. **Fixed Link** (OpenPIMS users):
   - Bottom-right link to OpenPIMS configuration
   - Small logo icon with text
   - Mobile-optimized with touch events and hardware acceleration

4. **Logo Embedding**:
   - OpenPIMS logo embedded as Base64 Data URL (line 1: `OPENPIMS_LOGO_SVG`)
   - Used at 120px (accept-all popup), 20px (buttons), 18px (fixed link)
   - Note: Initial overlay popup for non-OpenPIMS users loads logo from `https://openpims.de/openpims.svg`

## TypeScript Implementation

The project is fully typed with TypeScript:
- **Types Defined**:
  - `CookieConfig` - Interface for cookie configuration objects
  - `CookieConfigResponse` - Union type for API responses (array or object)
  - `Env` - Interface for environment variables
- **Strict Mode**: Enabled for maximum type safety
- **Cloudflare Workers Types**: `@cloudflare/workers-types` package provides native Request/Response types
- **Function Signatures**: All functions have explicit parameter and return types

### Cookie Filtering Behavior

Cookie filtering only occurs when ALL of these conditions are met:
- OpenPIMS signal detected (via header, user-agent, or cookie)
- Request originates from EU country (checked via `request.cf.country`)
- Response contains `set-cookie` headers
- Configuration URL returns valid allowed cookies list

If any condition fails, the response passes through unmodified.
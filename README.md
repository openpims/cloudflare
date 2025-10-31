# OpenPIMS Cookie Filter Worker

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/openpims/cloudflare)

A Cloudflare Worker for GDPR-compliant cookie filtering with OpenPIMS integration.

## Overview

This Cloudflare Worker implements intelligent cookie filtering for GDPR compliance. It detects OpenPIMS users, filters cookies based on configurable allow-lists, and provides a user-friendly interface for cookie consent management.

## Features

- **TypeScript**: Fully typed with TypeScript for better developer experience and type safety
- **GDPR-compliant Cookie Management**: Automatic cookie filtering for EU requests
- **OpenPIMS Integration**: Seamless integration with the OpenPIMS cookie management system
- **Accept-All-Cookies Mode**: Option to accept all cookies with persistent setting
- **User-friendly UI**: Overlay popup for non-OpenPIMS users and cookie management button
- **EU Detection**: Automatic detection of EU requests via Cloudflare's geo-location
- **Flexible Configuration**: Support for multiple configuration sources

## Installation

```bash
git clone https://github.com/openpims/cloudflare
cd cloudflare
npm install
```

## Development

Start local development server:
```bash
npm run dev
```

## Deployment

```bash
# Default deployment
npm run deploy

# Staging environment
npm run deploy:staging

# Production environment
npm run deploy:production
```

## How It Works

### 1. Request Processing

The worker checks incoming requests for OpenPIMS signals via multiple methods:

**OpenPIMS Detection Methods:**
- **Method 1: X-OpenPIMS Header** (Chrome, Firefox, Chromium)
  - Header: `X-OpenPIMS: https://token.openpims.de`
- **Method 2: User-Agent Signal** (Safari)
  - Pattern: `Mozilla/5.0 (...) OpenPIMS/1.0 (+https://token.openpims.de)`
  - Used when browser platform doesn't support custom header modification

**Additional Checks:**
- `x-openpims` cookie (legacy fallback)
- `accept_all_cookies` query parameter
- `openpims_accept_all_cookies` cookie

### 2. User Flows

**Non-OpenPIMS Users:**
- See an overlay popup with OpenPIMS logo
- Two options: "Accept all cookies" or "Open cookie settings"

**Accept-All-Cookie Users:**
- Cookie is set when clicking "Accept all cookies"
- Cookie management button at bottom right for changing settings

**OpenPIMS Users:**
- Direct access without popup
- Fixed link to OpenPIMS settings at bottom right

### 3. Cookie Filtering

- Only active for EU requests
- Filters `Set-Cookie` headers based on allow-list
- Allowed cookies are loaded from configuration

## Configuration

### Environment Variables (wrangler.toml)

```toml
[vars]
OPENPIMS_CONFIG_URL = "https://example.com/openpims.json"  # Optional
ENVIRONMENT = "production"  # or "staging"
```

### Cookie Configuration

Allowed cookies are determined from OpenPIMS signals in this priority:

1. **X-OpenPIMS Header** (Chrome, Firefox, Chromium)
   - Header: `X-OpenPIMS: https://token.openpims.de`
2. **User-Agent Signal** (Safari)
   - Pattern: `OpenPIMS/1.0 (+https://token.openpims.de)`
   - Extracted via regex: `/OpenPIMS\/[\d.]+\s+\(\+([^)]+)\)/`
3. **x-openpims Cookie** (legacy fallback)
4. **Environment Variable**: `OPENPIMS_CONFIG_URL`
5. **Default**: `https://{request-domain}/openpims.json`

The worker queries the OpenPIMS URL with `?url=https://{site}/openpims.json` to fetch user consent preferences.

### Configuration Format

As array:
```json
["session", "user_pref", "analytics"]
```

As object:
```json
{
  "allowed_cookies": ["session", "user_pref", "analytics"]
}
```

## UI Components

### Overlay Popup
- Fullscreen overlay with OpenPIMS logo (120px)
- Two action buttons for cookie decision
- Only shown for HTML responses without OpenPIMS detection

### Cookie Management Button
- Fixed position at bottom right
- Opens popup for changing settings
- Allows switching to OpenPIMS management

### OpenPIMS Link
- Small logo (18px) with text at bottom right
- Mobile-optimized with touch events
- Hardware-accelerated for better performance

## Technical Details

- **TypeScript**: Written in TypeScript with full type safety and Cloudflare Workers types
- **Single-file Architecture**: All logic in `src/index.ts`
- **Embedded Logo**: OpenPIMS logo embedded as Base64 Data-URL
- **EU Detection**: Uses Cloudflare's `request.cf.country`
- **Mobile Optimization**: Touch events and hardware acceleration

## License

Apache 2.0 - See LICENSE file

## Support

For questions or issues visit [OpenPIMS.de](https://openpims.de)
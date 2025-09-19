# OpenPIMS Cookie Filter Worker

A Cloudflare Worker template for filtering cookies based on OpenPIMS configuration.

## Features

- Filters cookies based on allowed cookie lists
- Redirects to OpenPIMS when no x-openpims header is present
- Configurable cookie configuration URL via environment variables
- Support for staging and production environments

## Setup

Users can clone and deploy with:

```bash
git clone https://github.com/openpims/cloudflare
cd cloudflare
npm install
npx wrangler deploy
```

### Configuration

1. Configure your worker in `wrangler.toml`

2. Set environment variables:
   - `OPENPIMS_URL`: Base URL for redirects (optional)
   - `OPENPIMS_CONFIG_URL`: Custom URL for cookie configuration (optional)

## Development

```bash
npm run dev
```

## Deployment

```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

## Configuration

The worker looks for cookie configuration at:
1. `OPENPIMS_CONFIG_URL` environment variable (if set)
2. `https://{domain}/openpims.json` (default)

The configuration file should contain an array of allowed cookie names:
```json
["session", "user_pref", "analytics"]
```

Or an object with an `allowed_cookies` property:
```json
{
  "allowed_cookies": ["session", "user_pref", "analytics"]
}
```

## How it works

1. If no `x-openpims` header is present, redirects to `https://openpims.de/?url={OPENPIMS_URL or current domain}`
2. If the header is present, fetches the original request
3. Filters response cookies based on the allowed cookie configuration
4. Returns the response with only allowed cookies
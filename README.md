# OpenPIMS Cookie Filter Worker

Ein Cloudflare Worker für GDPR-konforme Cookie-Filterung mit OpenPIMS Integration.

## Überblick

Dieser Cloudflare Worker implementiert eine intelligente Cookie-Filterung für GDPR-Compliance. Er erkennt OpenPIMS-Nutzer, filtert Cookies basierend auf konfigurierbaren Allow-Listen und bietet eine benutzerfreundliche Oberfläche für das Cookie-Consent-Management.

## Features

- **GDPR-konformes Cookie-Management**: Automatische Cookie-Filterung für EU-Anfragen
- **OpenPIMS-Integration**: Nahtlose Integration mit dem OpenPIMS Cookie-Management-System
- **Accept-All-Cookies-Modus**: Option zum Akzeptieren aller Cookies mit persistenter Einstellung
- **Benutzerfreundliche UI**: Overlay-Popup für Nicht-OpenPIMS-Nutzer und Cookie-Management-Button
- **EU-Erkennung**: Automatische Erkennung von EU-Anfragen über Cloudflare's Geo-Location
- **Flexible Konfiguration**: Unterstützung mehrerer Konfigurationsquellen

## Installation

```bash
git clone https://github.com/openpims/cloudflare
cd cloudflare
npm install
```

## Entwicklung

Lokalen Entwicklungsserver starten:
```bash
npm run dev
```

## Deployment

```bash
# Standard-Deployment
npm run deploy

# Staging-Umgebung
npm run deploy:staging

# Produktiv-Umgebung
npm run deploy:production
```

## Funktionsweise

### 1. Request-Verarbeitung

Der Worker prüft eingehende Requests auf:
- `x-openpims` Header
- OpenPIMS im User-Agent String
- `accept_all_cookies` Query-Parameter
- `openpims_accept_all_cookies` Cookie

### 2. User Flows

**Nicht-OpenPIMS-Nutzer:**
- Sehen ein Overlay-Popup mit OpenPIMS-Logo
- Zwei Optionen: "Alle Cookies akzeptieren" oder "Cookie-Einstellungen öffnen"

**Accept-All-Cookie-Nutzer:**
- Cookie wird gesetzt bei Klick auf "Alle Cookies akzeptieren"
- Cookie-Management-Button unten rechts für Einstellungsänderungen

**OpenPIMS-Nutzer:**
- Direkter Zugriff ohne Popup
- Fixer Link zu OpenPIMS-Einstellungen unten rechts

### 3. Cookie-Filterung

- Nur aktiv für EU-Anfragen
- Filtert `Set-Cookie` Headers basierend auf Allow-Liste
- Erlaubte Cookies werden aus Konfiguration geladen

## Konfiguration

### Umgebungsvariablen (wrangler.toml)

```toml
[vars]
OPENPIMS_CONFIG_URL = "https://example.com/openpims.json"  # Optional
ENVIRONMENT = "production"  # oder "staging"
```

### Cookie-Konfiguration

Die erlaubten Cookies werden in dieser Priorität ermittelt:

1. **OpenPIMS URL aus User-Agent**: Format `OpenPIMS/X.X.X (+https://example.com)`
2. **Umgebungsvariable**: `OPENPIMS_CONFIG_URL`
3. **Standard**: `https://{request-domain}/openpims.json`

### Konfigurationsformat

Als Array:
```json
["session", "user_pref", "analytics"]
```

Als Objekt:
```json
{
  "allowed_cookies": ["session", "user_pref", "analytics"]
}
```

## UI-Komponenten

### Overlay-Popup
- Vollbild-Overlay mit OpenPIMS-Logo (120px)
- Zwei Action-Buttons für Cookie-Entscheidung
- Nur bei HTML-Responses ohne OpenPIMS-Erkennung

### Cookie-Management-Button
- Fixierte Position unten rechts
- Öffnet Popup zur Einstellungsänderung
- Ermöglicht Wechsel zu OpenPIMS-Management

### OpenPIMS-Link
- Kleines Logo (18px) mit Text unten rechts
- Mobile-optimiert mit Touch-Events
- Hardware-beschleunigt für bessere Performance

## Technische Details

- **Einzel-Datei-Architektur**: Gesamte Logik in `src/index.js`
- **Embedded Logo**: OpenPIMS-Logo als Base64 Data-URL eingebettet
- **EU-Erkennung**: Nutzt Cloudflare's `request.cf.country`
- **Mobile Optimierung**: Touch-Events und Hardware-Beschleunigung

## Lizenz

[Lizenz hier einfügen]

## Support

Bei Fragen oder Problemen besuchen Sie [OpenPIMS.de](https://openpims.de)
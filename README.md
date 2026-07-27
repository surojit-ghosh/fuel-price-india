# fuel-price-india ⛽

> **High-performance, fingerprinted dataset generator and scraper for historical fuel prices (Petrol & Diesel) across Indian cities and states.**

[![npm version](https://img.shields.io/npm/v/fuel-price-india.svg)](https://www.npmjs.com/package/fuel-price-india)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

---

## 📌 Table of Contents

- [Key Features](#-key-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
  - [Mode A: CLI (`npx`)](#mode-a-cli-via-npx)
  - [Mode B: Programmatic API (Node.js / TypeScript)](#mode-b-programmatic-api)
- [State-Wise & Capital Auto-Expansion](#-state-wise--capital-auto-expansion)
- [Output Dataset CSV Schema](#-output-dataset-csv-schema)
- [Enum Reference](#-enum-reference)
  - [`City`](#city-enum)
  - [`State`](#state-enum)
  - [`Fuel`](#fuel-enum)
- [API Reference](#-api-reference)
- [Anti-Bot Fingerprint Technology](#-anti-bot-fingerprint-technology)
- [Automated Publishing via GitHub Actions](#-automated-publishing-via-github-actions)
- [Versioning & Release Guide](#-versioning--release-guide)
- [License](#-license)

---

## ⚡ Key Features

- 🚀 **Dual-Mode**: Use directly via `npx` CLI without installing, or import as a TypeScript / JavaScript module.
- 🛡️ **Anti-Bot Bypass**: Uses `header-generator` to dynamically synthesize authentic Chrome/Windows HTTP headers (`Sec-CH-UA`, Client Hints, User-Agent, Referer) with randomized jitter.
- 🏛️ **State & Capital Auto-Expansion**: Pass any state (e.g. `State.WEST_BENGAL`) to automatically scrape every city in that state, tagged with its capital.
- 📅 **Daily Series Forward-Filling**: Automatically normalizes and forward-fills missing dates from the first entry up to today.
- 📊 **Individual CSV Generation**: Outputs clean, separate CSV files per city per fuel type (e.g. `output/Kolkata_Petrol.csv`).
- 🔷 **Full TypeScript Support**: Auto-complete enums for 300+ Indian cities and all 36 States & UTs.

---

## 📥 Installation

Install into your project via npm:

```bash
npm install fuel-price-india
```

Or run directly without installation via `npx`:

```bash
npx fuel-india --locations="Kolkata" --fuels="petrol"
```

---

## 🚀 Quick Start

### Mode A: CLI (via `npx`)

No coding required! Generate datasets directly from your terminal:

```bash
# Scrape Kolkata & entire West Bengal state for both Petrol and Diesel
npx fuel-india --locations="Kolkata,West Bengal" --fuels="petrol,diesel" --output="./my-data"

# Scrape Delhi Petrol only
npx fuel-india --locations="Delhi" --fuels="petrol"

# Use shorthand aliases
npx fuel-price-india -l "Goa,Gujarat" -f "all" -o "./output"
```

#### CLI Options

| Flag | Long Flag | Description | Default |
|---|---|---|---|
| `-l` | `--locations <items>` | Comma-separated city or state names | *(Required)* |
| `-f` | `--fuels <items>` | Fuel types: `petrol`, `diesel`, or `all` | `petrol,diesel` |
| `-o` | `--output <dir>` | Output folder for CSV files | `./output` |
| `-h` | `--help` | Display CLI help menu | |

---

### Mode B: Programmatic API

Import `FuelScraper` and typed enums into your Node.js or TypeScript code:

```typescript
import { FuelScraper, City, State, Fuel } from 'fuel-price-india';

async function generateDataset() {
  const scraper = new FuelScraper({
    locations: [
      City.KOLKATA,        // Individual City
      City.DELHI,          // Individual City
      State.WEST_BENGAL,   // State expansion (scrapes ALL cities in West Bengal)
      State.GOA            // State expansion
    ],
    fuels: [Fuel.PETROL, Fuel.DIESEL],
    outputDir: './fuel_datasets'
  });

  const result = await scraper.run();
  console.log(`Successfully written ${result.totalRowsWritten} rows across ${result.filesExported} CSV files!`);
}

generateDataset();
```

---

## 🏛️ State-Wise & Capital Auto-Expansion

When you pass a state name into `locations` (e.g. `State.GUJARAT`), the library automatically queries the embedded location database and resolves all cities belonging to Gujarat (e.g. Ahmedabad, Surat, Rajkot, Vadodara, etc.), attaching `Gandhinagar` as the capital.

```typescript
const scraper = new FuelScraper({
  locations: [State.MAHARASHTRA], // Resolves to Mumbai, Pune, Nagpur, Nashik, Thane, etc.
  fuels: [Fuel.PETROL]
});
```

---

## 📊 Output Dataset CSV Schema

Every CSV file is generated per city and per fuel type:

**File path format**: `{outputDir}/{CityName}_{FuelType}.csv`  
*Example*: `output/Kolkata_Petrol.csv`

### Sample CSV Contents:

| Date | State | Capital | City | FuelType | Price |
|---|---|---|---|---|---|
| 2002-06-04 | West Bengal | Kolkata | Kolkata | Petrol | 29.39 |
| 2002-06-05 | West Bengal | Kolkata | Kolkata | Petrol | 29.39 |
| 2002-06-06 | West Bengal | Kolkata | Kolkata | Petrol | 29.45 |
| ... | ... | ... | ... | ... | ... |
| 2026-07-27 | West Bengal | Kolkata | Kolkata | Petrol | 103.94 |

---

## 📖 Enum Reference

### `City` Enum
AutoComplete names for major Indian cities:

```typescript
import { City } from 'fuel-price-india';

City.KOLKATA    // 'Kolkata'
City.MUMBAI     // 'Mumbai'
City.DELHI      // 'Delhi'
City.CHENNAI    // 'Chennai'
City.BENGALURU  // 'Bengaluru'
City.HYDERABAD  // 'Hyderabad'
// ... 300+ cities supported
```

### `State` Enum
Complete listing of all 36 Indian States and Union Territories:

```typescript
import { State } from 'fuel-price-india';

State.WEST_BENGAL   // 'West Bengal'
State.MAHARASHTRA   // 'Maharashtra'
State.GUJARAT       // 'Gujarat'
State.KARNATAKA     // 'Karnataka'
State.TAMIL_NADU    // 'Tamil Nadu'
State.DELHI         // 'Delhi'
// ... all states supported
```

### `Fuel` Enum
Supported fuel options:

```typescript
import { Fuel } from 'fuel-price-india';

Fuel.PETROL  // { code: '0H', name: 'Petrol' }
Fuel.DIESEL  // { code: '1H', name: 'Diesel' }
```

---

## 🔧 API Reference

### `new FuelScraper(options)`

#### Constructor Parameters (`FuelScraperOptions`)

- `locations`: `Array<City | State | string>` — List of cities or states to scrape.
- `fuels` *(optional)*: `Array<FuelDetail | string>` — Default: `[Fuel.PETROL, Fuel.DIESEL]`.
- `outputDir` *(optional)*: `string` — Directory to save output CSV files. Default: `'./output'`.

#### Methods

- `scraper.run()`: `Promise<PipelineResult>`  
  Executes the full pipeline: resolving locations -> generating fingerprints -> fetching raw HTML -> parsing records -> forward-filling daily calendar series -> exporting CSV files. Returns pipeline execution metrics.

- `scraper.getResolvedLocations()`: `ResolvedLocation[]`  
  Returns the array of resolved target city objects `{ id, city, state, capital }`.

---

## 🛡️ Anti-Bot Fingerprint Technology

Web Application Firewalls (WAF) like Cloudflare block scrapers that use generic HTTP headers. `fuel-price-india` integrates Apify's **`header-generator`** to synthesize full, synchronized browser client hint fingerprints:

- **Sec-CH-UA**: Synchronized Chrome desktop user-agent versions.
- **Client Hints**: `sec-ch-ua-mobile`, `sec-ch-ua-platform`.
- **Navigation Context**: Matching `referer` and `accept-language` headers.
- **Polite Jitter**: Automatic randomized sleep intervals (1.5s–3.0s) between consecutive requests.

---

## 🤖 Automated Publishing via GitHub Actions

This repository includes pre-configured GitHub Actions workflows for continuous integration and automated NPM publishing.

### 1. Set Up `NPM_TOKEN` Secret on GitHub

1. Log into your [npmjs.com](https://www.npmjs.com/) account.
2. Go to **Access Tokens** -> **Generate New Token** -> Choose **Automation**.
3. Copy the generated token string.
4. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
5. Click **New repository secret**, set Name to `NPM_TOKEN` and Secret to your NPM token.

### 2. Triggering Auto-Release

Whenever you create and push a new Git version tag, GitHub Actions will compile TypeScript and publish your package to NPM automatically:

```bash
# Bump version (e.g. 1.0.0 -> 1.0.1)
npm version patch

# Push commit & tags to GitHub
git push origin main --tags
```

You can also trigger manual publishing at any time via the **Actions** tab in your GitHub repository using **Run workflow**.

---

## 📦 Versioning & Release Guide

This package follows [Semantic Versioning (SemVer)](https://semver.org/):

- `MAJOR.MINOR.PATCH`
- `npm run build` is automatically executed before publishing via `prepublishOnly`.

---

## 📄 License

ISC License © 2026. Free to use in open-source and commercial applications.

#!/usr/bin/env node

import { Command } from 'commander';
import { FuelScraper } from './FuelScraper';
import { Fuel } from './enums/Fuel';

const program = new Command();

program
  .name('fuel-india')
  .description('Scrape historical Indian fuel price datasets (Petrol & Diesel) for cities/states with browser fingerprinting.')
  .option('-l, --locations <items>', 'Comma-separated cities or states (e.g. "Kolkata,West Bengal,Delhi")')
  .option('-f, --fuels <items>', 'Comma-separated fuels: petrol, diesel, or all (default: "petrol,diesel")', 'petrol,diesel')
  .option('-o, --output <dir>', 'Output directory for generated CSV files', './output')
  .action(async (options) => {
    try {
      if (!options.locations) {
        console.error('❌ Error: Please specify --locations (e.g., --locations="Kolkata,Delhi" or -l "West Bengal")');
        process.exit(1);
      }

      const locationsList = options.locations.split(',').map((s: string) => s.trim()).filter(Boolean);
      const fuelInputs = options.fuels.split(',').map((s: string) => s.trim().toLowerCase());
      const selectedFuels = [];

      if (fuelInputs.includes('all') || (fuelInputs.includes('petrol') && fuelInputs.includes('diesel'))) {
        selectedFuels.push(Fuel.PETROL, Fuel.DIESEL);
      } else {
        if (fuelInputs.includes('petrol')) selectedFuels.push(Fuel.PETROL);
        if (fuelInputs.includes('diesel')) selectedFuels.push(Fuel.DIESEL);
      }

      if (selectedFuels.length === 0) {
        console.error('❌ Error: Valid fuel choices are "petrol", "diesel", or "all"');
        process.exit(1);
      }

      const scraper = new FuelScraper({
        locations: locationsList,
        fuels: selectedFuels,
        outputDir: options.output
      });

      await scraper.run();
    } catch (err: any) {
      console.error(`\n❌ Execution error: ${err.message}\n`);
      process.exit(1);
    }
  });

program.parse(process.argv);

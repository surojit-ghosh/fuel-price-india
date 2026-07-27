import path from 'path';
import ora from 'ora';
import { ResolvedLocation } from './locationResolver';
import { FuelDetail } from '../enums/Fuel';
import { fetchRawHtml } from './client';
import { parseRecords } from './parser';
import { curateDailySeries } from './curator';
import { exportToCsv } from './exporter';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface PipelineOptions {
  locations: ResolvedLocation[];
  fuels: FuelDetail[];
  outputDir: string;
}

export interface PipelineResult {
  locationsProcessed: number;
  filesExported: number;
  totalRowsWritten: number;
  outputDir: string;
}

export async function runPipeline(options: PipelineOptions): Promise<PipelineResult> {
  const { locations, fuels, outputDir } = options;

  let totalFiles = 0;
  let totalRows = 0;

  console.log(`\n⚡ Starting Fuel Price Scraping Pipeline (${locations.length} locations, ${fuels.length} fuel types)...\n`);

  for (const loc of locations) {
    for (const fuel of fuels) {
      const spinner = ora(`Fetching ${loc.city} (${loc.state}) — ${fuel.name}...`).start();

      try {
        const rawHtml = await fetchRawHtml(loc.id, fuel.code, loc.city, fuel.name);
        const rawRecords = parseRecords(rawHtml);

        if (rawRecords.length === 0) {
          spinner.warn(`No price data returned for ${loc.city} (${fuel.name})`);
          continue;
        }

        const curated = curateDailySeries(rawRecords, loc.state, loc.capital, loc.city, fuel.name);
        const sanitizedCityName = loc.city.replace(/[^a-zA-Z0-9_-]/g, '_');
        const fileName = `${sanitizedCityName}_${fuel.name}.csv`;
        const targetPath = path.join(outputDir, fileName);

        exportToCsv(curated, targetPath);

        totalFiles++;
        totalRows += curated.length;

        spinner.succeed(`${loc.city} — ${fuel.name} (${curated.length.toLocaleString()} rows → ${targetPath})`);
      } catch (err: any) {
        spinner.fail(`Failed ${loc.city} (${fuel.name}): ${err.message}`);
        throw err;
      }

      const delay = Math.floor(Math.random() * 1500) + 1500;
      await sleep(delay);
    }
  }

  const result: PipelineResult = {
    locationsProcessed: locations.length,
    filesExported: totalFiles,
    totalRowsWritten: totalRows,
    outputDir: path.resolve(outputDir)
  };

  console.log('\n' + '═'.repeat(60));
  console.log('🎉 Fuel Price Pipeline Execution Completed!');
  console.log(`  • Locations processed : ${result.locationsProcessed}`);
  console.log(`  • Files exported      : ${result.filesExported}`);
  console.log(`  • Total rows written  : ${result.totalRowsWritten.toLocaleString()}`);
  console.log(`  • Output directory    : ${result.outputDir}`);
  console.log('═'.repeat(60) + '\n');

  return result;
}

import { City } from './enums/City';
import { State } from './enums/State';
import { Fuel, FuelDetail } from './enums/Fuel';
import { resolveLocations, ResolvedLocation } from './lib/locationResolver';
import { runPipeline, PipelineResult } from './lib/pipeline';

export interface FuelScraperOptions {
  locations: Array<City | State | string>;
  fuels?: Array<FuelDetail | string>;
  outputDir?: string;
}

export class FuelScraper {
  private rawLocations: string[];
  private fuels: FuelDetail[];
  private outputDir: string;

  constructor(options: FuelScraperOptions) {
    if (!options || !options.locations || options.locations.length === 0) {
      throw new Error('FuelScraper error: At least one location (City or State) must be provided.');
    }

    this.rawLocations = options.locations.map((loc) => String(loc));
    this.outputDir = options.outputDir || './output';

    if (!options.fuels || options.fuels.length === 0) {
      this.fuels = [Fuel.PETROL, Fuel.DIESEL];
    } else {
      this.fuels = options.fuels.map((f) => {
        if (typeof f === 'string') {
          const lower = f.toLowerCase();
          if (lower === 'petrol') return Fuel.PETROL;
          if (lower === 'diesel') return Fuel.DIESEL;
          throw new Error(`Invalid fuel type '${f}'. Must be 'petrol' or 'diesel'.`);
        }
        return f;
      });
    }
  }

  public getResolvedLocations(): ResolvedLocation[] {
    return resolveLocations(this.rawLocations);
  }

  public async run(): Promise<PipelineResult> {
    const resolved = this.getResolvedLocations();
    if (resolved.length === 0) {
      throw new Error(`No valid cities could be resolved from input locations: ${JSON.stringify(this.rawLocations)}`);
    }

    return await runPipeline({
      locations: resolved,
      fuels: this.fuels,
      outputDir: this.outputDir
    });
  }
}

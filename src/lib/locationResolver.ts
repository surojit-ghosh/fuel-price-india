import { LOCATION_DB } from '../data/locationDb';

export interface ResolvedLocation {
  id: number;
  city: string;
  state: string;
  capital: string;
}

export function resolveLocations(inputLocations: string[]): ResolvedLocation[] {
  const resolvedMap = new Map<number, ResolvedLocation>();

  for (const item of inputLocations) {
    const matchedState = LOCATION_DB.find(
      (entry) => entry.state.toLowerCase() === item.toLowerCase()
    );

    if (matchedState) {
      for (const cityObj of matchedState.cities) {
        if (!resolvedMap.has(cityObj.id)) {
          resolvedMap.set(cityObj.id, {
            id: cityObj.id,
            city: cityObj.name,
            state: matchedState.state,
            capital: matchedState.capital
          });
        }
      }
      continue;
    }

    for (const entry of LOCATION_DB) {
      const cityObj = entry.cities.find(
        (c) => c.name.toLowerCase() === item.toLowerCase()
      );
      if (cityObj) {
        if (!resolvedMap.has(cityObj.id)) {
          resolvedMap.set(cityObj.id, {
            id: cityObj.id,
            city: cityObj.name,
            state: entry.state,
            capital: entry.capital
          });
        }
        break;
      }
    }
  }

  return Array.from(resolvedMap.values());
}

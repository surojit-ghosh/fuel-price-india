import { RawRecord } from './parser';

export interface DailyRecord {
  date: string;
  state: string;
  capital: string;
  city: string;
  fuelType: string;
  price: number;
}

export function curateDailySeries(
  rawRecords: RawRecord[],
  stateName: string,
  capitalName: string,
  cityName: string,
  fuelName: string
): DailyRecord[] {
  if (!rawRecords || rawRecords.length === 0) {
    return [];
  }

  const priceMap = new Map<string, number>();
  rawRecords.forEach((r) => {
    const dateStr = r.date.toISOString().split('T')[0];
    priceMap.set(dateStr, r.price);
  });

  const startDate = new Date(rawRecords[0].date);
  const endDate = new Date();
  const curatedDataset: DailyRecord[] = [];

  let currentDate = new Date(startDate);
  let lastKnownPrice = rawRecords[0].price;

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0];

    if (priceMap.has(dateStr)) {
      lastKnownPrice = priceMap.get(dateStr)!;
    }

    curatedDataset.push({
      date: dateStr,
      state: stateName,
      capital: capitalName,
      city: cityName,
      fuelType: fuelName,
      price: lastKnownPrice
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return curatedDataset;
}

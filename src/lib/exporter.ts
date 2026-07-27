import fs from 'fs';
import path from 'path';
import { DailyRecord } from './curator';

export function exportToCsv(dataset: DailyRecord[], filePath: string): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const headers = ['Date', 'State', 'Capital', 'City', 'FuelType', 'Price'];
  const rows = [headers.join(',')];

  for (const row of dataset) {
    const escapedCity = row.city.includes(',') ? `"${row.city}"` : row.city;
    const escapedState = row.state.includes(',') ? `"${row.state}"` : row.state;
    const escapedCapital = row.capital.includes(',') ? `"${row.capital}"` : row.capital;
    rows.push(`${row.date},${escapedState},${escapedCapital},${escapedCity},${row.fuelType},${row.price}`);
  }

  fs.writeFileSync(filePath, rows.join('\n'), 'utf8');
}

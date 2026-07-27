export interface RawRecord {
  date: Date;
  price: number;
}

export function parseRecords(htmlContent: string): RawRecord[] {
  const regex = /x:new Date\('([^']+)'\)\s*,y:([\d.]+)/g;
  let match: RegExpExecArray | null;
  const records: RawRecord[] = [];

  while ((match = regex.exec(htmlContent)) !== null) {
    const dateObj = new Date(match[1]);
    const priceVal = parseFloat(match[2]);
    if (!isNaN(dateObj.getTime()) && !isNaN(priceVal)) {
      records.push({ date: dateObj, price: priceVal });
    }
  }

  records.sort((a, b) => a.date.getTime() - b.date.getTime());
  return records;
}

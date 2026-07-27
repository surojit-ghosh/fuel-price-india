import axios from 'axios';
import { getFingerprintedHeaders } from './fingerprint';

export async function fetchRawHtml(
  locationId: number,
  fuelCode: string,
  locationName: string,
  fuelName: string
): Promise<string> {
  const isPetrol = fuelCode === '0H';
  const refererUrl = `https://www.mypetrolprice.com/${locationId}/${isPetrol ? 0 : 1}/${locationName}-${fuelName}-Price-Chart`;
  const url = `https://www.mypetrolprice.com/FuelHistoryDataServing.aspx?LocationId=${locationId}&Span=1000&selectedFuels=${fuelCode}&HikeChartId=FuelHikeChartDetails`;

  const headers = getFingerprintedHeaders(refererUrl);
  const response = await axios.get<string>(url, { headers, timeout: 15000 });
  return response.data;
}

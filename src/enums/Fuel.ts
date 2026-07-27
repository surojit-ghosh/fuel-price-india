export interface FuelDetail {
  code: string;
  name: string;
}

export const Fuel = {
  PETROL: { code: '0H', name: 'Petrol' },
  DIESEL: { code: '1H', name: 'Diesel' }
} as const;

export type Fuel = typeof Fuel[keyof typeof Fuel];

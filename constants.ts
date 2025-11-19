
import { Bank } from './types';

type BankConfigType = {
  [key in Bank]: { name: string; color: string; label: string; }
};

export const BankConfig: BankConfigType = {
  [Bank.BBL]: { name: 'BBL', color: '#1e3a8a', label: 'BBL' },
  [Bank.KBANK]: { name: 'KBANK', color: '#16a34a', label: 'KBANK' },
  [Bank.SCB]: { name: 'SCB', color: '#7c3aed', label: 'SCB' },
  [Bank.KTB]: { name: 'KTB', color: '#06b6d4', label: 'KTB' },
  [Bank.BAY]: { name: 'BAY', color: '#eab308', label: 'BAY' }
};

export const WITHDRAWAL_AMOUNTS: number[] = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
  1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
  2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000,
  3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000,
  4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000,
  5100, 5200, 5300, 5400
];


export enum Bank {
  BBL = 'BBL',
  KBANK = 'KBANK',
  SCB = 'SCB',
  KTB = 'KTB',
  BAY = 'BAY'
}

export enum WithdrawalStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED'
}

export interface Withdrawal {
  id: number;
  user: string;
  amount: number;
  timestamp: string;
  bank: Bank;
  status: WithdrawalStatus;
}

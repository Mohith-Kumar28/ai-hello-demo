export interface MarketplaceData {
  country: string;
  shortName: string;
  autoPilot: number;
  dailyBudget: string;
  spend: { amount: string; change: string; trend: 'up' | 'down' };
  sales: { amount: string; change: string; trend: 'up' | 'down' };
  acos: { value: string; change: string; trend: 'up' | 'down' };
  units: { value: number; change: string; trend: 'up' | 'down' };
}

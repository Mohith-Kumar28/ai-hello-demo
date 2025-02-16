import { MarketplaceData } from '@/types/marketplace';

export const marketplaceData: MarketplaceData[] = [
  {
    country: 'USA',
    shortName: 'NaturalThings Main',
    autoPilot: 369,
    dailyBudget: '$60',
    spend: { amount: '$1,087.54', change: '+20.34%', trend: 'up' as const },
    sales: { amount: '$1,087.54', change: '-20.34%', trend: 'down' as const },
    acos: { value: '70.32%', change: '+20.34%', trend: 'up' as const },
    units: { value: 94, change: '-20.34%', trend: 'down' as const }
  },
  {
    country: 'Canada',
    shortName: 'NaturalThings',
    autoPilot: 74,
    dailyBudget: '$122',
    spend: { amount: '$1,087.54', change: '-20.34%', trend: 'down' as const },
    sales: { amount: '$1,087.54', change: '-20.34%', trend: 'down' as const },
    acos: { value: '10.32%', change: '-29.34%', trend: 'down' as const },
    units: { value: 65, change: '+29.34%', trend: 'up' as const }
  }
  // Add more data as needed
];

export const navigationTabs = [
  { value: 'profile', label: 'Profile' },
  { value: 'campaigns', label: 'Campaigns', count: 120 },
  { value: 'adGroups', label: 'Ad Groups', count: 12 },
  { value: 'targeting', label: 'Targeting', count: 0 }
];

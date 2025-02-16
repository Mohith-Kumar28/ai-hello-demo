export interface MarketplaceData {
  marketplace: string;
  shortName: string;
  autoPilot: number;
  dailyBudget: string;
  spend: {
    value: string;
    trend: number;
  };
  sales: {
    value: string;
    trend: number;
  };
  acos: {
    value: string;
    trend: number;
  };
  units: {
    value: number;
    trend: number;
  };
}

export const marketplaceData: MarketplaceData[] = [
  {
    marketplace: 'USA',
    shortName: 'NaturalThings Main',
    autoPilot: 369,
    dailyBudget: '$60',
    spend: {
      value: '$1,087.54',
      trend: 20.34
    },
    sales: {
      value: '$1,087.54',
      trend: 20.34
    },
    acos: {
      value: '70.32%',
      trend: 20.34
    },
    units: {
      value: 94,
      trend: -20.34
    }
  },
  {
    marketplace: 'Canada',
    shortName: 'NaturalThings',
    autoPilot: 74,
    dailyBudget: '$122',
    spend: {
      value: '$1,087.54',
      trend: -20.34
    },
    sales: {
      value: '$1,087.54',
      trend: -20.34
    },
    acos: {
      value: '10.32%',
      trend: -29.34
    },
    units: {
      value: 65,
      trend: 29.34
    }
  },
  {
    marketplace: 'Germany',
    shortName: 'NaturalThings Europe',
    autoPilot: 0,
    dailyBudget: '$122',
    spend: {
      value: '€1,087.54',
      trend: 20.34
    },
    sales: {
      value: '€0',
      trend: 0
    },
    acos: {
      value: '70.32%',
      trend: 20.34
    },
    units: {
      value: 75,
      trend: 55.34
    }
  },
  {
    marketplace: 'India',
    shortName: 'Natural Things',
    autoPilot: 3,
    dailyBudget: '$60',
    spend: {
      value: '₹0',
      trend: 0
    },
    sales: {
      value: '₹0',
      trend: 0
    },
    acos: {
      value: '0%',
      trend: 0
    },
    units: {
      value: 0,
      trend: 0
    }
  },
  {
    marketplace: 'Netherlands',
    shortName: 'NaturalThings Europe',
    autoPilot: 0,
    dailyBudget: '$60',
    spend: {
      value: '$0',
      trend: 0
    },
    sales: {
      value: '$0',
      trend: 0
    },
    acos: {
      value: '0%',
      trend: 0
    },
    units: {
      value: 0,
      trend: 0
    }
  },
  {
    marketplace: 'Germany',
    shortName: 'Natural Things',
    autoPilot: 0,
    dailyBudget: '$60',
    spend: {
      value: '$1,087.54',
      trend: 20.34
    },
    sales: {
      value: '$0',
      trend: 0
    },
    acos: {
      value: '0%',
      trend: 0
    },
    units: {
      value: 0,
      trend: 0
    }
  },
  {
    marketplace: 'Italy',
    shortName: 'NaturalThings Main',
    autoPilot: 1,
    dailyBudget: '$60',
    spend: {
      value: '€0',
      trend: 0
    },
    sales: {
      value: '€0',
      trend: 0
    },
    acos: {
      value: '0%',
      trend: 0
    },
    units: {
      value: 0,
      trend: 0
    }
  }
];

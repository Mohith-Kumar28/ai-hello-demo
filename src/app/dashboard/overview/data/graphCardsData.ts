import { Icons } from '@/components/icons';

interface GraphCardData {
  title: string;
  icon: keyof typeof Icons;
  color: string;
  amount: string;
  data: Array<{ date: string; value: number }>;
  config: {
    value: {
      label: string;
    };
  };
  trend: 'up' | 'down';
  trendValue: string;
}

export const graphCardsData: GraphCardData[] = [
  {
    title: 'SPEND',
    icon: 'dollarSign',
    color: '#F59E0B',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Spend'
      }
    },
    trend: 'down',
    trendValue: '-4.66%'
  },
  {
    title: 'AD SALES',
    icon: 'store',
    color: '#4266E9',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Sales'
      }
    },
    trend: 'up',
    trendValue: '+0.45%'
  },
  {
    title: 'IMPRESSIONS',
    icon: 'eye',
    color: '#0FB5B5',
    amount: '1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Impressions'
      }
    },
    trend: 'down',
    trendValue: '-1.07%'
  },
  {
    title: 'CLICKS',
    icon: 'mousePointer',
    color: '#00B8E6',
    amount: '1,433',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Clicks'
      }
    },
    trend: 'up',
    trendValue: '+0.66%'
  },
  {
    title: 'CTR',
    icon: 'percent',
    color: '#FF8533',
    amount: '0.8%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 1 + 0.5
      })),
    config: {
      value: {
        label: 'CTR'
      }
    },
    trend: 'down',
    trendValue: '-4.66%'
  },
  {
    title: 'CVR',
    icon: 'pieChart',
    color: '#CC00CC',
    amount: '6.4%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 10 + 5
      })),
    config: {
      value: {
        label: 'CVR'
      }
    },
    trend: 'up',
    trendValue: '+0.45%'
  },
  {
    title: 'CPC',
    icon: 'dollarSign',
    color: '#4266E9',
    amount: '$0.74',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 1 + 0.5
      })),
    config: {
      value: {
        label: 'CPC'
      }
    },
    trend: 'down',
    trendValue: '-1.07%'
  },
  {
    title: 'ACos',
    icon: 'barChart',
    color: '#FF1A1A',
    amount: '70.23%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 100 + 50
      })),
    config: {
      value: {
        label: 'ACos'
      }
    },
    trend: 'up',
    trendValue: '+0.66%'
  },
  {
    title: 'EPS',
    icon: 'circleDollarSign',
    color: '#E83A95',
    amount: '$1.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2 + 1
      })),
    config: {
      value: {
        label: 'EPS'
      }
    },
    trend: 'down',
    trendValue: '-4.66%'
  },
  {
    title: 'ORGANIC SALES',
    icon: 'boxIcon',
    color: '#6B7280',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Organic Sales'
      }
    },
    trend: 'up',
    trendValue: '+0.45%'
  },
  {
    title: 'SESSIONS',
    icon: 'activity',
    color: '#84CC16',
    amount: '2,659',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 3000 + 2000
      })),
    config: {
      value: {
        label: 'Sessions'
      }
    },
    trend: 'down',
    trendValue: '-1.07%'
  },
  {
    title: 'PAGE VIEWS',
    icon: 'eye',
    color: '#06B6D4',
    amount: '3,544',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 4000 + 3000
      })),
    config: {
      value: {
        label: 'Page Views'
      }
    },
    trend: 'up',
    trendValue: '+0.66%'
  },
  {
    title: 'BUYBOX %',
    icon: 'shoppingCart',
    color: '#059669',
    amount: '88.76%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 20 + 80
      })),
    config: {
      value: {
        label: 'BuyBox %'
      }
    },
    trend: 'down',
    trendValue: '-4.66%'
  },
  {
    title: 'UNIT SESSION %',
    icon: 'percent',
    color: '#E11D48',
    amount: '5.44%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2 + 4
      })),
    config: {
      value: {
        label: 'Unit Session %'
      }
    },
    trend: 'up',
    trendValue: '+0.45%'
  },
  {
    title: 'TOTAL SALES',
    icon: 'circleDollarSign',
    color: '#EAB308',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Total Sales'
      }
    },
    trend: 'down',
    trendValue: '-1.07%'
  },
  {
    title: 'TOTAL ACos',
    icon: 'trendingUp',
    color: '#F97316',
    amount: '39.17%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 10 + 35
      })),
    config: {
      value: {
        label: 'Total ACos'
      }
    },
    trend: 'up',
    trendValue: '+0.66%'
  }
];

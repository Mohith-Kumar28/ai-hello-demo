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
    color: '#FFC246',
    amount: '$1,234.56',
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
    amount: '$5,678.90',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Ad Sales'
      }
    },
    trend: 'up',
    trendValue: '+0.45%'
  },
  {
    title: 'IMPRESSIONS',
    icon: 'eye',
    color: '#07BEAA',
    amount: '234.5K',
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
    color: '#58C4FF',
    amount: '12.3K',
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
    color: '#FFA14F',
    amount: '5.23%',
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
    color: '#9669BE',
    amount: '15.7%',
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
    color: '#005AFF',
    amount: '$0.45',
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
    color: '#8C564B',
    amount: '25.4%',
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
    color: '#E377C2',
    amount: '$2.34',
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
    color: '#7F7F7F',
    amount: '$3,456.78',
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
    color: '#BCBD21',
    amount: '45.6K',
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
    color: '#17BECF',
    amount: '89.1K',
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
    color: '#558564',
    amount: '92.3%',
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
    color: '#FFB6C2',
    amount: '3.45%',
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
    color: '#FFD700',
    amount: '$12,345.67',
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
    color: '#D2691F',
    amount: '18.9%',
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

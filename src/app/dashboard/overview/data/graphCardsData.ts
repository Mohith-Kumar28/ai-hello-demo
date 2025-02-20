import { Icons } from '@/components/icons';

interface GraphCardData {
  title: string;
  iconPath: string;
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
  isHighlighted?: boolean;
}

export const graphCardsData: GraphCardData[] = [
  {
    title: 'SPEND',
    iconPath: '/graph-icons/image copy 0.png',
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
    iconPath: '/graph-icons/image copy 1.png',
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
        label: 'Ad Sales'
      }
    },
    trend: 'up',
    trendValue: '+0.45%',
    isHighlighted: true
  },
  {
    title: 'IMPRESSIONS',
    iconPath: '/graph-icons/image copy 2.png',
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
    iconPath: '/graph-icons/image copy 3.png',
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
    trendValue: '+0.66%',
    isHighlighted: true
  },
  {
    title: 'CTR',
    iconPath: '/graph-icons/image copy 4.png',
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
    iconPath: '/graph-icons/image copy 5.png',
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
    iconPath: '/graph-icons/image copy 6.png',
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
    iconPath: '/graph-icons/image copy 7.png',
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
    iconPath: '/graph-icons/image copy 8.png',
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
    iconPath: '/graph-icons/image copy 9.png',
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
    iconPath: '/graph-icons/image copy 10.png',
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
    iconPath: '/graph-icons/image copy 11.png',
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
    iconPath: '/graph-icons/image copy 12.png',
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
    iconPath: '/graph-icons/image copy 13.png',
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
    iconPath: '/graph-icons/image copy 14.png',
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
    iconPath: '/graph-icons/image copy 15.png',
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

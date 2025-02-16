import { Icons } from '@/components/icons';

interface GraphCardData {
  title: string;
  icon: keyof typeof Icons;
  iconBg: string;
  amount: string;
  data: Array<{ date: string; value: number }>;
  config: {
    value: {
      label: string;
      color: string;
    };
  };
  trend: 'up' | 'down';
  trendValue: string;
  chartColor: string;
}

export const graphCardsData: GraphCardData[] = [
  {
    title: 'SPEND',
    icon: 'dollarSign',
    iconBg: 'bg-amber-100',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Spend',
        color: 'hsl(45 93% 47%)'
      }
    },
    trend: 'down',
    trendValue: '-4.66%',
    chartColor: 'hsl(45 93% 47%)'
  },
  {
    title: 'AD SALES',
    icon: 'store',
    iconBg: 'bg-blue-100',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Sales',
        color: 'hsl(220 85% 57%)'
      }
    },
    trend: 'up',
    trendValue: '+0.45%',
    chartColor: 'hsl(220 85% 57%)'
  },
  {
    title: 'IMPRESSIONS',
    icon: 'eye',
    iconBg: 'bg-teal-100',
    amount: '1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Impressions',
        color: 'hsl(171 85% 45%)'
      }
    },
    trend: 'down',
    trendValue: '-1.07%',
    chartColor: 'hsl(171 85% 45%)'
  },
  {
    title: 'CLICKS',
    icon: 'mousePointer',
    iconBg: 'bg-sky-100',
    amount: '1,433',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Clicks',
        color: 'hsl(190 85% 50%)'
      }
    },
    trend: 'up',
    trendValue: '+0.66%',
    chartColor: 'hsl(190 85% 50%)'
  },
  {
    title: 'CTR',
    icon: 'percent',
    iconBg: 'bg-orange-100',
    amount: '0.8%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 1 + 0.5
      })),
    config: {
      value: {
        label: 'CTR',
        color: 'hsl(25 85% 50%)'
      }
    },
    trend: 'down',
    trendValue: '-4.66%',
    chartColor: 'hsl(25 85% 50%)'
  },
  {
    title: 'CVR',
    icon: 'pieChart',
    iconBg: 'bg-purple-100',
    amount: '6.4%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 10 + 5
      })),
    config: {
      value: {
        label: 'CVR',
        color: 'hsl(280 85% 50%)'
      }
    },
    trend: 'up',
    trendValue: '+0.45%',
    chartColor: 'hsl(280 85% 50%)'
  },
  {
    title: 'CPC',
    icon: 'dollarSign',
    iconBg: 'bg-blue-100',
    amount: '$0.74',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 1 + 0.5
      })),
    config: {
      value: {
        label: 'CPC',
        color: 'hsl(220 85% 57%)'
      }
    },
    trend: 'down',
    trendValue: '-1.07%',
    chartColor: 'hsl(220 85% 57%)'
  },
  {
    title: 'ACos',
    icon: 'barChart',
    iconBg: 'bg-rose-100',
    amount: '70.23%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 100 + 50
      })),
    config: {
      value: {
        label: 'ACos',
        color: 'hsl(350 85% 50%)'
      }
    },
    trend: 'up',
    trendValue: '+0.66%',
    chartColor: 'hsl(350 85% 50%)'
  },

  {
    title: 'EPS',
    icon: 'circleDollarSign',
    iconBg: 'bg-[#FDE7F4]',
    amount: '$1.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2 + 1
      })),
    config: {
      value: {
        label: 'EPS',
        color: '#E83A95'
      }
    },
    trend: 'down',
    trendValue: '-4.66%',
    chartColor: '#E83A95'
  },
  {
    title: 'ORGANIC SALES',
    icon: 'boxIcon',
    iconBg: 'bg-[#F3F4F6]',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Organic Sales',
        color: '#6B7280'
      }
    },
    trend: 'up',
    trendValue: '+0.45%',
    chartColor: '#6B7280'
  },
  {
    title: 'SESSIONS',
    icon: 'activity',
    iconBg: 'bg-[#ECFCCB]',
    amount: '2,659',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 3000 + 2000
      })),
    config: {
      value: {
        label: 'Sessions',
        color: '#84CC16'
      }
    },
    trend: 'down',
    trendValue: '-1.07%',
    chartColor: '#84CC16'
  },
  {
    title: 'PAGE VIEWS',
    icon: 'eye',
    iconBg: 'bg-[#CFFAFE]',
    amount: '3,544',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 4000 + 3000
      })),
    config: {
      value: {
        label: 'Page Views',
        color: '#06B6D4'
      }
    },
    trend: 'up',
    trendValue: '+0.66%',
    chartColor: '#06B6D4'
  },
  {
    title: 'BUYBOX %',
    icon: 'shoppingCart',
    iconBg: 'bg-[#D1FAE5]',
    amount: '88.76%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 20 + 80
      })),
    config: {
      value: {
        label: 'BuyBox %',
        color: '#059669'
      }
    },
    trend: 'down',
    trendValue: '-4.66%',
    chartColor: '#059669'
  },
  {
    title: 'UNIT SESSION %',
    icon: 'percent',
    iconBg: 'bg-[#FFE4E6]',
    amount: '5.44%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2 + 4
      })),
    config: {
      value: {
        label: 'Unit Session %',
        color: '#E11D48'
      }
    },
    trend: 'up',
    trendValue: '+0.45%',
    chartColor: '#E11D48'
  },
  {
    title: 'TOTAL SALES',
    icon: 'circleDollarSign',
    iconBg: 'bg-[#FEF9C3]',
    amount: '$1,087.54',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 2000 + 1000
      })),
    config: {
      value: {
        label: 'Total Sales',
        color: '#EAB308'
      }
    },
    trend: 'down',
    trendValue: '-1.07%',
    chartColor: '#EAB308'
  },
  {
    title: 'TOTAL ACos',
    icon: 'trendingUp',
    iconBg: 'bg-[#FFEDD5]',
    amount: '39.17%',
    data: Array(20)
      .fill(0)
      .map((_, i) => ({
        date: `2024-${String(i + 1).padStart(2, '0')}`,
        value: Math.random() * 10 + 35
      })),
    config: {
      value: {
        label: 'Total ACos',
        color: '#F97316'
      }
    },
    trend: 'up',
    trendValue: '+0.66%',
    chartColor: '#F97316'
  }
];

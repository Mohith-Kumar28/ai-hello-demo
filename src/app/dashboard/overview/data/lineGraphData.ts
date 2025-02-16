interface DataPoint {
  day: string;
  sales: number;
  spend: number;
  target?: number;
}

export const lineGraphData: DataPoint[] = [
  { day: 'Mon', sales: 5, spend: 20 },
  { day: 'Tue', sales: 70, spend: 50, target: 55 },
  { day: 'Wed', sales: 50, spend: 8, target: 70 },
  { day: 'Thu', sales: 25, spend: 80 },
  { day: 'Fri', sales: 25, spend: 55 },
  { day: 'Sat', sales: 20, spend: 25, target: 55 },
  { day: 'Sun', sales: 45, spend: 2 }
];

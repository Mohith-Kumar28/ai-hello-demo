'use client';

import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps
} from 'recharts';
import { lineGraphData } from '../../data/lineGraphData';

export function LineGraph() {
  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (!active || !payload) return null;

    return (
      <div className='rounded-lg bg-white p-3 shadow-lg'>
        {payload.map((entry, index) => {
          if (entry.dataKey === 'target') return null;
          return (
            <div key={index} className='flex items-center gap-2'>
              <div
                className='h-2 w-2 rounded-full'
                style={{ backgroundColor: entry.stroke }}
              />
              <span className='text-sm font-medium capitalize'>
                {entry.name}:
              </span>
              <span className='text-sm text-gray-600'>
                ${entry?.value?.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card className='p-4'>
      <div className='mb-4 flex items-center gap-2'>
        <span className='text-sm font-medium'>Range</span>
        <Select defaultValue='weekly'>
          <SelectTrigger className='h-8 w-[100px] border-0 bg-gray-50 text-sm'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='daily'>Daily</SelectItem>
            <SelectItem value='weekly'>Weekly</SelectItem>
            <SelectItem value='monthly'>Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='h-[300px] w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={lineGraphData}
            margin={{ top: 5, right: 30, bottom: 5, left: 30 }}
          >
            <CartesianGrid
              //   strokeDasharray='3 3'
              vertical={true}
              stroke='#CCCCCC'
            />
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
            />
            <YAxis
              yAxisId='right'
              orientation='right'
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
            />
            <Tooltip
              content={CustomTooltip}
              cursor={{
                stroke: '#E5E7EB',
                strokeWidth: 1,
                strokeDasharray: '3 3'
              }}
            />
            <Line
              type='linear'
              dataKey='sales'
              stroke='#5470DE'
              strokeWidth={1.5}
              dot={{ r: 4, fill: '#5470DE', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#5470DE' }}
              name='Sales'
            />
            <Line
              type='linear'
              dataKey='spend'
              stroke='#58C4FF'
              strokeWidth={1.5}
              dot={{ r: 4, fill: '#58C4FF', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#58C4FF' }}
              name='Spend'
            />
            <Line
              type='linear'
              dataKey='target'
              stroke='transparent'
              dot={{ r: 4, fill: '#22C55E', strokeWidth: 0 }}
              name='Target'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

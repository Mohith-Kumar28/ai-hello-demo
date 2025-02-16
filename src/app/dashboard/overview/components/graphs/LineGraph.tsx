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
  Tooltip
} from 'recharts';
import { lineGraphData } from '../../data/lineGraphData';

export function LineGraph() {
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
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              stroke='#E5E7EB'
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
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              formatter={(value) => [`$${value}`, '']}
            />
            <Line
              type='linear'
              dataKey='sales'
              stroke='#4266E9'
              strokeWidth={2}
              dot={{ r: 4, fill: '#4266E9', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#4266E9' }}
            />
            <Line
              type='linear'
              dataKey='spend'
              stroke='#06B6D4'
              strokeWidth={2}
              dot={{ r: 4, fill: '#06B6D4', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#06B6D4' }}
            />
            <Line
              type='linear'
              dataKey='target'
              stroke='transparent'
              dot={{ r: 4, fill: '#22C55E', strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

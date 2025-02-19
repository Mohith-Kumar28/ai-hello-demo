'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Icons } from '@/components/icons';
import { MoveDown, MoveUp, TrendingDown, TrendingUp } from 'lucide-react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { cn } from '@/lib/utils';

interface BaseGraphProps {
  title: string;
  icon: keyof typeof Icons;
  color: string;
  amount: string;
  data: Array<{ date: string; value: number }>;
  config: ChartConfig;
  trend: 'up' | 'down';
  trendValue: string;
  height?: number;
  showAxis?: boolean;
  showTooltip?: boolean;
}

export function BaseGraph({
  title,
  icon,
  color,
  amount,
  data,
  config,
  trend,
  trendValue,
  height = 60,
  showAxis = false,
  showTooltip = false
}: BaseGraphProps) {
  const Icon = Icons[icon];

  // Create a unique ID for each gradient using the color without '#'
  const gradientId = `gradient-${color.replace('#', '')}`;

  return (
    <Card className='relative h-[90px] overflow-hidden'>
      <CardHeader className='flex justify-between p-1 pb-2'>
        <div className='flex items-start gap-2'>
          <div
            className='m-1 rounded-full p-0.5'
            style={{ backgroundColor: `${color}` }}
          >
            <Icon className='size-[13px]' style={{ color: 'white' }} />
          </div>
          <div className='w-full'>
            <CardTitle className='text-[11px] font-semibold'>{title}</CardTitle>

            <div className='flex w-full justify-between text-[10px]'>
              <div className=' '>{amount}</div>

              <div
                className={cn(
                  'flex items-end font-medium',
                  trend === 'down' ? 'text-destructive' : 'text-green-500'
                )}
              >
                {trendValue}
                {trend === 'up' ? (
                  <MoveUp className='h-3 w-3 text-green-500' />
                ) : (
                  <MoveDown className='h-3 w-3 text-destructive' />
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <div className='absolute bottom-0 left-0 right-0 h-[50px]'>
          <ResponsiveContainer width='100%' height={height}>
            <AreaChart data={data}>
              {showAxis && (
                <>
                  <XAxis dataKey='date' />
                  <YAxis />
                </>
              )}
              {showTooltip && <Tooltip />}
              <defs>
                <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor={color} stopOpacity={0.7} />
                  <stop offset='30%' stopColor={color} stopOpacity={0.2} />
                  <stop offset='50%' stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='value'
                stroke={color}
                fill={`url(#${gradientId})`}
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Icons } from '@/components/icons';
import { MoveDown, MoveUp, TrendingDown, TrendingUp } from 'lucide-react';
import { Area, AreaChart } from 'recharts';
import { cn } from '@/lib/utils';

interface BaseGraphProps {
  title: string;
  icon: keyof typeof Icons;
  color: string;
  amount: string;
  data: any[];
  config: ChartConfig;
  trend: 'up' | 'down';
  trendValue: string;
}

export function BaseGraph({
  title,
  icon,
  color,
  amount,
  data,
  config,
  trend,
  trendValue
}: BaseGraphProps) {
  const Icon = Icons[icon];

  return (
    <Card className='relative h-[108px] overflow-hidden'>
      <CardHeader className='flex-row items-center justify-between space-y-0 p-1 pb-2'>
        <div className='flex items-center gap-2'>
          <div
            className='rounded-full p-1.5'
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className='size-2' style={{ color: color }} />
          </div>
          <div>
            <CardTitle className='text-sm font-semibold'>{title}</CardTitle>

            <div className='flex justify-between gap-1 text-xs'>
              <span className=' '>{amount}</span>

              <span
                className={cn(
                  'flex items-center text-xs font-medium',
                  trend === 'down' ? 'text-destructive' : 'text-green-500'
                )}
              >
                {trendValue}
                {trend === 'up' ? (
                  <MoveUp className='h-3 w-3 text-green-500' />
                ) : (
                  <MoveDown className='h-3 w-3 text-destructive' />
                )}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <div className='absolute bottom-0 left-0 right-0 h-[60px]'>
          <ChartContainer config={config}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient
                  id={`gradient-${title}`}
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop offset='10%' stopColor={color} stopOpacity={0.6} />
                  <stop offset='40%' stopColor={color} stopOpacity={0.2} />
                  <stop offset='100%' stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='value'
                stroke={color}
                fill={`url(#gradient-${title})`}
                strokeWidth={1.5}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig } from '@/components/ui/chart';
import { Icons } from '@/components/icons';
import { MoveDown, MoveUp } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
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
  isHighlighted?: boolean;
}

export function BaseGraph({
  title,
  icon,
  color,
  amount,
  data,
  trend,
  trendValue,
  height = 60,
  isHighlighted = false
}: BaseGraphProps) {
  const Icon = Icons[icon];
  const gradientId = `gradient-${color.replace('#', '')}`;

  return (
    <Card
      className={cn(
        'relative h-[90px] overflow-hidden transition-colors',
        isHighlighted && 'bg-[var(--card-color)]'
      )}
      style={
        isHighlighted
          ? ({ '--card-color': color } as React.CSSProperties)
          : undefined
      }
    >
      <CardHeader className='flex justify-between p-1 pb-2'>
        <div className='flex items-start gap-2'>
          <div
            className='m-1 rounded-full p-0.5'
            style={{
              backgroundColor: isHighlighted ? 'white' : color
            }}
          >
            <Icon
              className='size-[13px]'
              style={{ color: isHighlighted ? color : 'white' }}
            />
          </div>
          <div className='w-full'>
            <CardTitle
              className={cn(
                'text-[11px] font-semibold',
                isHighlighted && 'text-white'
              )}
            >
              {title}
            </CardTitle>

            <div className='flex w-full justify-between text-[10px]'>
              <div className={cn(isHighlighted && 'text-white')}>{amount}</div>

              <div
                className={cn(
                  'flex items-end font-medium',
                  isHighlighted
                    ? 'text-white'
                    : trend === 'down'
                      ? 'text-destructive'
                      : 'text-green-500'
                )}
              >
                {trendValue}
                {trend === 'up' ? (
                  <MoveUp className='h-3 w-3' />
                ) : (
                  <MoveDown className='h-3 w-3' />
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
              <defs>
                <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                  <stop
                    offset='0%'
                    stopColor={isHighlighted ? 'white' : color}
                    stopOpacity={0.7}
                  />
                  <stop
                    offset='30%'
                    stopColor={isHighlighted ? 'white' : color}
                    stopOpacity={0.2}
                  />
                  <stop
                    offset='50%'
                    stopColor={isHighlighted ? 'white' : color}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='value'
                stroke={isHighlighted ? 'white' : color}
                fill={`url(#${gradientId})`}
                strokeWidth={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

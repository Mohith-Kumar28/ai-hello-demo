'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig } from '@/components/ui/chart';
import { MoveDown, MoveUp } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BaseGraphProps {
  title: string;
  iconPath: string;
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
  iconPath,
  color,
  amount,
  data,
  trend,
  trendValue,
  height = 60,
  isHighlighted = false
}: BaseGraphProps) {
  const gradientId = `gradient-${color.replace('#', '')}`;

  return (
    <Card
      className={cn(
        'relative h-[100px] overflow-hidden transition-colors',
        isHighlighted && 'bg-[var(--card-color)]'
      )}
      style={
        isHighlighted
          ? ({ '--card-color': color } as React.CSSProperties)
          : undefined
      }
    >
      <CardHeader className='flex justify-between p-1 pb-2'>
        <div className='flex items-start gap-1'>
          <div
            className='m-1'
            // className='m-1 rounded-full p-0.5'
            // style={{
            //   backgroundColor: isHighlighted ? 'white' : color
            // }}
          >
            <Image
              src={iconPath}
              alt={title}
              width={29}
              height={29}
              // className={cn(
              //   'size-[13px]',
              //   isHighlighted ? '[filter:invert(1)]' : ''
              // )}
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
                  'flex items-center font-medium',
                  isHighlighted
                    ? 'text-white'
                    : trend === 'down'
                      ? 'text-destructive'
                      : 'text-green-500'
                )}
              >
                {trendValue}
                {trend === 'up' ? (
                  <MoveUp className='size-2' />
                ) : (
                  <MoveDown className='size-2' />
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

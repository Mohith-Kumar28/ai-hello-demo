import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface TrendIndicatorProps {
  value: number;
  className?: string;
}

export function TrendIndicator({ value, className }: TrendIndicatorProps) {
  const isPositive = value >= 0;

  return (
    <span
      className={cn(
        'flex items-center text-xs',
        isPositive ? 'text-green-500' : 'text-red-500',
        className
      )}
    >
      {isPositive ? '+' : ''}
      {value.toFixed(2)}%
      {isPositive ? (
        <ArrowUp className='ml-1 h-3 w-3' />
      ) : (
        <ArrowDown className='ml-1 h-3 w-3' />
      )}
    </span>
  );
}

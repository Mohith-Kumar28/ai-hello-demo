'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MarketplaceData } from '../../data/profileData';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  ArrowUpDown,
  Pencil,
  ArrowUpCircle,
  ArrowDownCircle,
  Filter,
  ArrowDownWideNarrow
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TableHeader = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-2 text-xs font-semibold text-gray-500'>
      <Filter className='size-4' />

      {title}

      <ArrowDownWideNarrow className='size-4' />
    </div>
  );
};

const TrendCell = ({ value, trend }: { value: string; trend: number }) => {
  return (
    <div className='flex items-center gap-2'>
      {trend >= 0 ? (
        <ArrowUpCircle className='size-6 fill-green-500 text-white' />
      ) : (
        <ArrowDownCircle className='size-6 fill-red-500 text-white' />
      )}
      <span className='text-gray-500'>{value}</span>
      <span className={cn('text-xs text-gray-500')}>{Math.abs(trend)}%</span>
    </div>
  );
};

export const columns: ColumnDef<MarketplaceData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='border-secondary'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className='border-secondary'
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'marketplace',
    header: () => <TableHeader title='Marketplace' />,
    cell: ({ row }) => (
      <span className='text-primary'>{row.getValue('marketplace')}</span>
    )
  },
  {
    accessorKey: 'shortName',
    header: () => <TableHeader title='Short Name' />,
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Pencil className='h-3 w-3 text-primary' />
        <span className='text-gray-500'>{row.getValue('shortName')}</span>
      </div>
    )
  },
  {
    accessorKey: 'autoPilot',
    header: () => <TableHeader title='AutoPilot' />,
    cell: ({ row }) => (
      <span className='text-gray-500'>{row.getValue('autoPilot')}</span>
    )
  },
  {
    accessorKey: 'dailyBudget',
    header: () => <TableHeader title='Daily Budget' />,
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Pencil className='h-3 w-3 text-primary' />
        <span className='text-gray-500'>{row.getValue('dailyBudget')}</span>
      </div>
    )
  },
  {
    id: 'spend',
    header: () => <TableHeader title='Spend' />,
    cell: ({ row }) => {
      const spend = row.original.spend;
      return <TrendCell value={spend.value} trend={spend.trend} />;
    }
  },
  {
    id: 'sales',
    header: () => <TableHeader title='Sales' />,
    cell: ({ row }) => {
      const sales = row.original.sales;
      return <TrendCell value={sales.value} trend={sales.trend} />;
    }
  },
  {
    id: 'acos',
    header: () => <TableHeader title='ACoS' />,
    cell: ({ row }) => {
      const acos = row.original.acos;
      return <TrendCell value={acos.value} trend={acos.trend} />;
    }
  },
  {
    id: 'units',
    header: () => <TableHeader title='Units' />,
    cell: ({ row }) => {
      const units = row.original.units;
      return <TrendCell value={units.value.toString()} trend={units.trend} />;
    }
  }
];

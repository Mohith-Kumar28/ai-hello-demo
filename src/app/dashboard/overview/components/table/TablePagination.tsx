'use client';

import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export function TablePagination() {
  return (
    <div className='flex items-center justify-end gap-2 px-2 py-1'>
      <p className='text-sm text-gray-500'>Showing 7 to 10 of 200 entries</p>

      <div className='flex items-center gap-1'>
        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
        >
          <ChevronsLeft className='h-4 w-4' />
        </Button>
        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>

        <div className='flex items-center gap-1'>
          <Button
            variant='outline'
            className='h-9 w-9 rounded-lg border-gray-200 bg-blue-50 text-blue-600 hover:bg-blue-100'
          >
            1
          </Button>
          <Button
            variant='outline'
            className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
          >
            2
          </Button>
          <Button
            variant='outline'
            className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
          >
            4
          </Button>
          <Button
            variant='outline'
            className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
          >
            5
          </Button>
        </div>

        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-lg border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
        >
          <ChevronsRight className='h-4 w-4' />
        </Button>

        <Select defaultValue='10'>
          <SelectTrigger className='h-9 w-[70px] rounded-lg border-gray-200'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent side='top'>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

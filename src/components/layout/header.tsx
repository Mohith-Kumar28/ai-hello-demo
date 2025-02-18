'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Bell } from 'lucide-react';
import CalendarDateRangePicker from '../date-range-picker';
import Image from 'next/image';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserMenu } from './user-menu';

export default function Header() {
  return (
    <header className='relative flex h-16 shrink-0 items-center justify-end gap-4 border-b px-4'>
      <SidebarTrigger className='z-40 sm:absolute sm:-left-3 sm:top-4' />

      <Button
        variant='outline'
        className='h-[37px] border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600'
      >
        Get Specialist Help
      </Button>

      <Select defaultValue='us'>
        <SelectTrigger className='w-[244px]'>
          <div className='flex items-center gap-2'>
            <Image src='/us-flag.png' alt='f' width={24} height={24} />
            <SelectValue placeholder='Natural Things Main (US)' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='us'>Natural Things Main (US)</SelectItem>
          {/* Add other locations as needed */}
        </SelectContent>
      </Select>

      <CalendarDateRangePicker />

      <Button variant='outline' size='icon' className='relative rounded-full'>
        <Bell className='h-5 w-5' />
        <span className='absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600'></span>
      </Button>

      <UserMenu />
    </header>
  );
}

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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import CalendarDateRangePicker from '../date-range-picker';
import Image from 'next/image';
import { SidebarTrigger } from '../ui/sidebar';

export default function Header() {
  return (
    <header className='relative flex h-16 shrink-0 items-center justify-end gap-4 border-b px-4'>
      <SidebarTrigger className='z-10 sm:absolute sm:-left-4 sm:top-4' />
      <Button
        variant='outline'
        className='border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600'
      >
        Get Specialist Help
      </Button>

      <Select defaultValue='us'>
        <SelectTrigger className='w-[240px]'>
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

      <Avatar className='size-8'>
        <AvatarImage src='/us-flag.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='ml-8'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex cursor-pointer items-center gap-2'>
              <div className='flex flex-col text-sm'>
                <span className='font-medium'>Qasim Rai</span>
                <span className='text-xs text-muted-foreground'>
                  Natural Store
                </span>
              </div>
              <Avatar>
                <AvatarImage src='/path-to-profile-image.jpg' />
                <AvatarFallback>QR</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { ChevronDown, LayoutGrid, User, UserCircle2 } from 'lucide-react';

export function ProfileHeader() {
  return (
    <div className='flex items-center justify-between'>
      Profile
      <div className='flex items-center gap-4'>
        <Card className='flex items-center gap-2 overflow-hidden rounded-lg'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='flex h-[37px] items-center gap-2 border-none'
              >
                <LayoutGrid className='h-4 w-4' />
                17 Columns Selected
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Select All</DropdownMenuItem>
              <DropdownMenuItem>Deselect All</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='flex h-[37px] items-center gap-2 border-none'
              >
                <User className='h-4 w-4' />
                Active
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Active</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Card>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='flex h-[37px] items-center gap-2'>
              Actions
              <ChevronDown className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>Action 1</DropdownMenuItem>
            <DropdownMenuItem>Action 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

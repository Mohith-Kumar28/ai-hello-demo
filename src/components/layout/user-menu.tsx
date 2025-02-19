'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut, useSession } from 'next-auth/react';
import { ChevronDown, LogOut } from 'lucide-react';

export function UserMenu() {
  const { data: session } = useSession();

  return (
    <div className='ml-8'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex cursor-pointer items-center gap-2'>
            <div className='flex flex-col text-right'>
              <span className='text-sm font-semibold text-gray-900'>
                {session?.user?.name || 'Qasim Rai'}
              </span>
              <span className='text-sm text-gray-500'>Natural Store</span>
            </div>
            <Avatar className='size-9'>
              <AvatarImage
                src={session?.user?.image || '/person.png'}
                alt={session?.user?.name || 'User'}
              />
              <AvatarFallback>QR</AvatarFallback>
            </Avatar>
            <ChevronDown className='h-5 w-5 text-gray-500' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
          <DropdownMenuLabel>
            <div className='flex flex-col space-y-1'>
              <p className='leading-none text-muted-foreground'>
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: '/' })}
            className='text-red-600 focus:text-red-600'
          >
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

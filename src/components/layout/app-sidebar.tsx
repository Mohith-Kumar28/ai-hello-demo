'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Clock,
  Target,
  Search,
  MessageSquare,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Dashboard',
    icon: BarChart3,
    href: '/dashboard'
  },
  {
    title: 'Campaigns',
    icon: BarChart3,
    href: '/campaigns'
  },
  {
    title: 'Day Parting',
    icon: Clock,
    href: '/day-parting'
  },
  {
    title: 'Targeting',
    icon: Target,
    href: '/targeting'
  },
  {
    title: 'Search Terms',
    icon: Search,
    href: '/search-terms'
  },
  {
    title: 'Automated Messaging',
    icon: MessageSquare,
    href: '/messaging'
  },
  {
    title: 'Research',
    icon: FileText,
    href: '/research'
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
    hasDropdown: true
  }
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className=' '>
      <SidebarHeader className='px-6 py-8'>
        <Image src='/logo-full.png' alt='AI Hello' width={146} height={32} />
      </SidebarHeader>

      <SidebarContent className='px-4'>
        <SidebarGroup>
          <SidebarGroupLabel className='mb-1 text-xs font-medium'>
            MENU
          </SidebarGroupLabel>

          <SidebarMenu>
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      'gap-3 rounded-md px-3 py-5 text-[15px] transition-colors',
                      isActive
                        ? 'bg-white font-medium text-black'
                        : 'text-gray-500 hover:bg-gray-100'
                    )}
                  >
                    <Link href={item.href} className='flex items-center'>
                      <Icon className='h-5 w-5' />
                      <span>{item.title}</span>
                      {item.hasDropdown && (
                        <ChevronRight className='ml-auto h-4 w-4' />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

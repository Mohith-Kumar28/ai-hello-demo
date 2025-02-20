'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarRail
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
  ChevronRight,
  HelpCircle,
  LogOut,
  CircleGauge,
  ChartNoAxesColumn,
  MessageSquareShare,
  BookText
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import { useSidebar } from '@/components/ui/sidebar';
import { Separator } from '../ui/separator';

const menuItems = [
  {
    title: 'Dashboard',
    icon: '/menu-icons/dashboard.svg',
    href: '/dashboard'
  },
  {
    title: 'Campaigns',
    icon: '/menu-icons/chart-simple.svg',
    href: '/campaigns'
  },
  {
    title: 'Day Parting',
    icon: '/menu-icons/clock.svg',
    href: '/day-parting'
  },
  {
    title: 'Targeting',
    icon: '/menu-icons/bullseye-pointer.svg',
    href: '/targeting'
  },
  {
    title: 'Search Terms',
    icon: '/menu-icons/search.svg',
    href: '/search-terms'
  },
  {
    title: 'Automated Messaging',
    icon: '/menu-icons/message-arrow-up-right.svg',
    href: '/messaging'
  },
  {
    title: 'Research',
    icon: '/menu-icons/book.svg',
    href: '/research'
  },
  {
    title: 'Settings',
    icon: '/menu-icons/gear.svg',
    href: '/settings',
    items: [
      { title: 'Profile', href: '/settings/profile' },
      { title: 'Account', href: '/settings/account' },
      { title: 'Preferences', href: '/settings/preferences' }
    ]
  }
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible='icon' className=' '>
      <SidebarHeader
        className={cn(
          'transition-sidebar-content -mt-4 px-6 py-8',
          isCollapsed && 'px-0',
          !isCollapsed && '-ml-3'
        )}
      >
        <div className='transition-sidebar-content relative h-[60px] w-[146px]'>
          <div
            className={cn(
              'absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out',
              isCollapsed ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            )}
          >
            <Image
              src='/logo-full.png'
              alt='AI Hello'
              width={146}
              height={60}
              className='h-full w-full object-contain'
            />
          </div>

          <div
            className={cn(
              'absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-20 -translate-y-1/2 transition-all duration-300 ease-in-out',
              isCollapsed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            )}
          >
            <Image
              src='/logo-small.png'
              alt='AI Hello'
              width={60}
              height={60}
              className='h-full w-full object-contain'
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <span className='mb-4 text-[12px]'>MENU</span>

          <SidebarMenu>
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return item.items ? (
                <SidebarMenuItem key={item.title}>
                  <div className='group-data-[state=expanded]:block group-data-[state=collapsed]:hidden'>
                    <Collapsible
                      asChild
                      defaultOpen={isActive}
                      className='group/collapsible'
                    >
                      <div>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={cn(
                              'gap-3 rounded-md px-3 py-5 text-[13px] transition-colors',
                              isActive
                                ? 'bg-white font-medium text-black'
                                : 'text-gray-500 hover:bg-gray-100'
                            )}
                          >
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={15}
                              height={15}
                              className='text-current'
                            />
                            <span>{item.title}</span>
                            <ChevronRight className='ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  className='text-[13px]'
                                  asChild
                                  isActive={pathname === subItem.href}
                                >
                                  <Link href={subItem.href}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </div>

                  <div className='group-data-[state=collapsed]:block group-data-[state=expanded]:hidden'>
                    <Separator className='my-2' />

                    <span className='-mx-0.5 text-[10px]'>{item.title}</span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={cn(
                            'gap-3 rounded-md px-3 py-5 text-[13px] transition-colors',
                            isActive
                              ? 'bg-white font-medium text-black'
                              : 'text-gray-500 hover:bg-gray-100'
                          )}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={15}
                            height={15}
                            className='text-current'
                          />
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side='right'
                        align='start'
                        className='w-48'
                        sideOffset={4}
                      >
                        {item.items.map((subItem) => (
                          <DropdownMenuItem key={subItem.title} asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                'w-full cursor-pointer',
                                pathname === subItem.href &&
                                  'bg-accent text-accent-foreground'
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={cn(
                      'gap-3 rounded-md px-3 py-5 text-[13px] transition-all duration-300 ease-in-out',
                      isActive
                        ? 'bg-white font-medium text-black'
                        : 'text-gray-500 hover:bg-gray-100'
                    )}
                  >
                    <Link href={item.href} className='flex items-center'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={15}
                        height={15}
                        className={cn(
                          'transition-all duration-300 ease-in-out',
                          isCollapsed ? 'mr-0 scale-100' : 'mr-3 scale-100'
                        )}
                      />

                      <span
                        className={cn(
                          'transition-all duration-300 ease-in-out',
                          isCollapsed
                            ? 'w-0 -translate-x-8 opacity-0'
                            : 'w-auto translate-x-0 opacity-100'
                        )}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

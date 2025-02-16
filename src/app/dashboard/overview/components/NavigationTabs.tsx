'use client';

import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  value: string;
  label: string;
  count?: number;
}

interface NavigationTabsProps {
  tabs: TabItem[];
  defaultValue: string;
  children: React.ReactNode;
}

export function NavigationTabs({
  tabs,
  defaultValue,
  children
}: NavigationTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className='w-full'>
      <TabsList className='h-auto border-b bg-transparent p-0'>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className='relative h-auto rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none'
          >
            <span className='flex items-center gap-2'>
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`min-w-[1.5rem] rounded-full bg-destructive px-2 py-0.5 text-center text-xs text-destructive-foreground`}
                >
                  {tab.count}
                </span>
              )}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator />
      {children}
    </Tabs>
  );
}

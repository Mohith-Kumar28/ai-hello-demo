import PageContainer from '@/components/layout/page-container';
import { NavigationTabs } from './components/NavigationTabs';
import { TabsContent } from '@/components/ui/tabs';
import { navigationTabs } from './data/mockData';
import { Card } from '@/components/ui/card';
import { GraphCards } from './components/GraphCards';

export default function OverViewLayout() {
  return (
    <PageContainer>
      <div className='flex w-full flex-col gap-4'>
        <Card className='w-full p-4'>
          <NavigationTabs tabs={navigationTabs} defaultValue='profile'>
            <TabsContent value='profile'>hiiiiiii</TabsContent>
          </NavigationTabs>
        </Card>
        <GraphCards />
      </div>
    </PageContainer>
  );
}

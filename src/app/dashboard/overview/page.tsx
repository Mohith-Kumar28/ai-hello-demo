import PageContainer from '@/components/layout/page-container';
import { NavigationTabs } from './components/NavigationTabs';
import { TabsContent } from '@/components/ui/tabs';
import { navigationTabs } from './data/mockData';
import { Card } from '@/components/ui/card';
import { GraphCards } from './components/GraphCards';
import { LineGraph } from './components/graphs/LineGraph';

export default function OverViewLayout() {
  return (
    <PageContainer>
      <div className='flex w-full flex-col gap-4'>
        <Card className='w-full p-4'>
          <NavigationTabs tabs={navigationTabs} defaultValue='profile'>
            <TabsContent value='profile'>hiiii</TabsContent>
          </NavigationTabs>
        </Card>
        <GraphCards />
        <LineGraph />
      </div>
    </PageContainer>
  );
}

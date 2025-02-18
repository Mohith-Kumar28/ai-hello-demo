import PageContainer from '@/components/layout/page-container';
import { NavigationTabs } from './components/NavigationTabs';
import { TabsContent } from '@/components/ui/tabs';
import { navigationTabs } from './data/mockData';
import { Card } from '@/components/ui/card';
import { GraphCards } from './components/GraphCards';
import { LineGraph } from './components/graphs/LineGraph';
import { ProfileDataTable } from './components/table/ProfileDataTable';

export default function OverViewLayout() {
  return (
    <PageContainer>
      <div className='flex w-full flex-col gap-4'>
        <Card className='p-4'>
          <NavigationTabs tabs={navigationTabs} defaultValue='profile'>
            <TabsContent value='profile'>
              <ProfileDataTable />
            </TabsContent>
            <TabsContent value='campaigns' className='p-4'>
              Campaigns Content Coming Soon
            </TabsContent>
            <TabsContent value='adGroups' className='p-4'>
              Ad Groups Content Coming Soon
            </TabsContent>
            <TabsContent value='targeting' className='p-4'>
              Targeting Content Coming Soon
            </TabsContent>
            <TabsContent value='targets' className='p-4'>
              Targets Content Coming Soon
            </TabsContent>
          </NavigationTabs>
        </Card>
        <GraphCards />
        <LineGraph />
      </div>
    </PageContainer>
  );
}

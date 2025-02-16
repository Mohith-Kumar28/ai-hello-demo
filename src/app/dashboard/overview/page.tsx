import PageContainer from '@/components/layout/page-container';
import { NavigationTabs } from './components/NavigationTabs';
import { TabsContent } from '@/components/ui/tabs';
import { navigationTabs } from './data/mockData';
import { Card } from '@/components/ui/card';

export default function OverViewLayout() {
  return (
    <PageContainer>
      <Card className='w-full p-4'>
        <NavigationTabs tabs={navigationTabs} defaultValue='profile'>
          <TabsContent value='profile'>
            <div>table</div>
          </TabsContent>
          <TabsContent value='campaigns'>
            <div>Campaigns Content</div>
          </TabsContent>
          <TabsContent value='adGroups'>
            <div>Ad Groups Content</div>
          </TabsContent>
          <TabsContent value='targeting'>
            <div>Targeting Content</div>
          </TabsContent>
        </NavigationTabs>
      </Card>
    </PageContainer>
  );
}

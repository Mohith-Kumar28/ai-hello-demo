'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { ProfileHeader } from './ProfileHeader';
import { DataTable } from './DataTable';

export function ProfileDataTable() {
  return (
    <div className='w-full'>
      <Card>
        <CardHeader className='p-4'>
          <ProfileHeader />
        </CardHeader>
        <DataTable />
      </Card>
    </div>
  );
}

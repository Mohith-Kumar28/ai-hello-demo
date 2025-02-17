'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { ProfileHeader } from './ProfileHeader';
import { DataTable } from './DataTable';
import { TablePagination } from './TablePagination';

export function ProfileDataTable() {
  return (
    <>
      <Card className='mb-3'>
        <CardHeader className='p-4'>
          <ProfileHeader />
        </CardHeader>
        <DataTable />
      </Card>
      <TablePagination />
    </>
  );
}

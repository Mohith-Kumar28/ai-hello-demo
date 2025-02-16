'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { TrendIndicator } from './TrendIndicator';
import { marketplaceData } from '../../data/profileData';
import { ProfileHeader } from './ProfileHeader';
import { Card, CardHeader } from '@/components/ui/card';

export function ProfileDataTable() {
  return (
    <div className='w-full'>
      <Card className=''>
        <CardHeader className='p-4'>
          <ProfileHeader />
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>
                <Checkbox />
              </TableHead>
              <TableHead>Marketplace</TableHead>
              <TableHead>
                <Button variant='ghost' className='p-0'>
                  Short Name
                  <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
              </TableHead>
              <TableHead>AutoPilot</TableHead>
              <TableHead>Daily Budget</TableHead>
              <TableHead>Spend</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>ACoS</TableHead>
              <TableHead>Units</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketplaceData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.marketplace}</TableCell>
                <TableCell>{row.shortName}</TableCell>
                <TableCell>{row.autoPilot}</TableCell>
                <TableCell>{row.dailyBudget}</TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    {row.spend.value}
                    <TrendIndicator value={row.spend.trend} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    {row.sales.value}
                    <TrendIndicator value={row.sales.trend} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    {row.acos.value}
                    <TrendIndicator value={row.acos.trend} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    {row.units.value}
                    <TrendIndicator value={row.units.trend} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

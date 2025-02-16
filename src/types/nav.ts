import { Icons } from '@/components/icons';

type IconKey = keyof typeof Icons;

export interface NavItem {
  title: string;
  url: string;
  icon?: IconKey;
  isActive?: boolean;
  items?: NavItem[];
}

import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'My Panel',
    main: [
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Sample Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'customer-management',
        short_label: 'S',
        name: '客户管理',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

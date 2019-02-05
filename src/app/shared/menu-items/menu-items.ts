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
    label: 'CIBC Navigation',
    main: [
      {
        main_state: 'cibc',
        state: 'trading',
        short_label: 'D',
        name: 'Trading',
        type: 'link',
        icon: 'icofont icofont-exchange'
      },
      {
        main_state: 'cibc',
        state: 'bulk',
        short_label: 'N',
        name: 'Bulk',
        type: 'link',
        icon: 'icofont icofont-layers'
      },
      {
        main_state: 'dashboard',
        state: '',
        short_label: 'S',
        name: 'Settlement',
        type: 'link',
        icon: 'icofont icofont-list'
      },
      {
        main_state: 'dashboard',
        state: '',
        short_label: 'W',
        name: 'Market Insight',
        type: 'link',
        icon: 'icofont icofont-chart-line-alt'
      },
      {
        main_state: 'dashboard',
        state: '',
        short_label: 'W',
        name: 'Cash Management',
        type: 'link',
        icon: 'icofont icofont-wallet'
      },
      {
        main_state: 'dashboard',
        state: '',
        short_label: 'C',
        name: 'Chat and Help',
        type: 'link',
        icon: 'icofont icofont-ui-text-chat'
      }
    ],
  }
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

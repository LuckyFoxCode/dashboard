import { BiTask } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { MdDashboard, MdFormatListBulleted, MdHelp } from 'react-icons/md';
import { PiWarning } from 'react-icons/pi';
import { NavItem } from './interfaces';

export const navigationItems: NavItem[] = [
  {
    path: '/',
    name: 'dashboard',
    icon: MdDashboard,
  },
  {
    path: '/vital-task',
    name: 'vital task',
    icon: PiWarning,
  },
  {
    path: '/my-task',
    name: 'my task',
    icon: BiTask,
  },
  {
    path: '/task-categories',
    name: 'task categories',
    icon: MdFormatListBulleted,
  },
  {
    path: '/settings',
    name: 'settings',
    icon: IoMdSettings,
  },
  {
    path: '/help',
    name: 'help',
    icon: MdHelp,
  },
];

import { NavItem, cn } from '@/libs';
import { NavLink } from 'react-router-dom';
import { Icon } from '../common';

interface AsideNavItemProps {
  item: NavItem;
}

export const AsideNavItem: React.FC<AsideNavItemProps> = ({ item }) => {
  const { path, name, icon } = item;

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn('aside-link w-full', isActive && 'bg-white text-rose-500')
        }
      >
        <Icon
          name={icon}
          size={24}
          className='mr-4'
        />
        {name}
      </NavLink>
    </li>
  );
};

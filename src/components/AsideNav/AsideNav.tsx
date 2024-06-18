import { cn, navigationItems } from '@/libs';
import { AsideNavItem } from './AsideNavItem';

interface AsideNavProps {
  className?: string;
}

export const AsideNav: React.FC<AsideNavProps> = ({ className }) => {
  return (
    <nav className={cn('flex flex-col overflow-y-auto', className)}>
      <ul className='flex flex-col gap-y-2'>
        {navigationItems.map((item) => (
          <AsideNavItem
            key={item.name}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
};

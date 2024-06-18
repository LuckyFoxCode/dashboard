import { AsideNav } from '@/components';
import { Icon } from '@/components/common';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Aside = () => {
  return (
    <aside className='flex h-[calc(100dvh-160px)] w-full max-w-[330px] flex-col rounded-r-lg bg-rose-500 px-2 pb-8 pt-28 text-white sm:px-4'>
      <AsideNav className='flex-1' />
      <Link
        to='/register'
        className='aside-link'
      >
        <Icon
          name={MdLogout}
          size={24}
          className='mr-4'
        />
        Logout
      </Link>
    </aside>
  );
};

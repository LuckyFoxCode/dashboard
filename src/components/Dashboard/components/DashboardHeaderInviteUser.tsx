import { Icon } from '@/components/common';
import { useState } from 'react';
import { IoPersonAdd } from 'react-icons/io5';

interface User {
  avatarId: string;
  avatar: string;
}

export const DashboardHeaderInviteUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(1);

  const maxVisibleUsers = 5;

  const visibleUsers = [...users.slice(0, maxVisibleUsers)];
  const extraUsersCount = users.length - maxVisibleUsers;

  const handleInviteUser = () => {
    setUsers((prev) => [
      ...prev,
      {
        avatarId: crypto.randomUUID(),
        avatar: `https://randomuser.me/api/portraits/men/${count}.jpg`,
      },
    ]);
    setCount((prev) => prev + 1);
  };

  return (
    <div className='flex items-center'>
      <div className='relative mr-5 flex gap-x-1 transition-all'>
        {visibleUsers.map(({ avatar, avatarId }) => (
          <img
            key={avatarId}
            src={avatar}
            alt='Avatar'
            className='animate-fadeInScaleIn size-10 rounded-[8px] object-cover'
          />
        ))}

        {extraUsersCount > 0 && (
          <div className='absolute right-0 top-0 flex size-10 items-center justify-center rounded-[8px] bg-slate-500/35'>
            <span className='font-montserrat text-sm text-white'>
              +{extraUsersCount}
            </span>
          </div>
        )}
      </div>
      <button
        onClick={handleInviteUser}
        className='flex items-center rounded-lg border border-rose-500 bg-transparent px-3 py-2 font-montserrat text-sm text-rose-500 transition-colors hover:bg-rose-500 hover:text-white'
      >
        <Icon
          name={IoPersonAdd}
          className='mr-2'
          size={18}
        />
        Invite
      </button>
    </div>
  );
};

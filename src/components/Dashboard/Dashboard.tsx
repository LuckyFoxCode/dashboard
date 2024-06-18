import { IoPersonAdd } from 'react-icons/io5';
import { Icon } from '../common';

export const Dashboard: React.FC = () => {
  return (
    <section className='flex flex-col'>
      <div className='mb-9 flex items-center justify-between'>
        <p className='text-dark text-4xl transition-colors dark:text-white'>
          Welcome back, Jhon, 👋
        </p>
        <div className='flex items-center'>
          <div className='relative mr-5 flex gap-x-1'>
            <div className='size-9 rounded-lg bg-gradient-to-tr from-slate-400 to-slate-800' />
            <div className='size-9 rounded-lg bg-gradient-to-tr from-slate-400 to-slate-800' />
            <div className='size-9 rounded-lg bg-gradient-to-tr from-slate-400 to-slate-800' />
            <div className='size-9 rounded-lg bg-gradient-to-tr from-slate-400 to-slate-800' />
            <div className='size-9 rounded-lg bg-gradient-to-tr from-slate-400 to-slate-800' />
            <span className='absolute right-3 top-1/2 -translate-y-1/2 font-montserrat text-sm text-white'>
              +1
            </span>
          </div>
          <button className='flex items-center rounded-lg border border-rose-500 bg-transparent px-3 py-2 font-montserrat text-sm text-rose-500 transition-colors hover:bg-rose-500 hover:text-white'>
            <Icon
              name={IoPersonAdd}
              className='mr-2'
              size={18}
            />
            Invite
          </button>
        </div>
      </div>
      <div className='flex w-full flex-col rounded-md border px-6 py-5 shadow-header'>
        Dashboard
      </div>
    </section>
  );
};

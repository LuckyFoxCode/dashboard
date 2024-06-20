import { MdOutlineTask } from 'react-icons/md';
import { Icon, ProgressRing } from '../common';

export const TaskStatus: React.FC = () => {
  return (
    <div className='flex w-full max-w-[420px] flex-col rounded-2xl bg-white px-6 pb-10 pt-6 shadow-header transition-all dark:bg-slate-800'>
      <div className='mb-9 flex'>
        <Icon
          name={MdOutlineTask}
          className='mr-2 text-slate-400'
          size={22}
        />
        <h1 className='font-semibold capitalize text-rose-500'>task status</h1>
      </div>
      <div className='flex justify-between'>
        <ProgressRing
          progress={84}
          title='completed'
          color='green'
        />
        <ProgressRing
          progress={46}
          title='in progress'
          color='blue'
        />
        <ProgressRing
          progress={13}
          title='not started'
          color='rose'
        />
      </div>
    </div>
  );
};

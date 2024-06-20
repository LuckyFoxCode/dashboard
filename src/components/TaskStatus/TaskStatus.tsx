import { MdOutlineTask } from 'react-icons/md';
import { ProgressRing, TaskTitle } from '../common';

export const TaskStatus: React.FC = () => {
  return (
    <div className='flex w-full max-w-[420px] flex-col rounded-2xl bg-white px-6 pb-10 pt-6 shadow-header transition-all dark:bg-slate-800'>
      <TaskTitle
        iconName={MdOutlineTask}
        title='task status'
        className='mb-9'
      />
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

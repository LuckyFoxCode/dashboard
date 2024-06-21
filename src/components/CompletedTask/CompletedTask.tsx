import { GrCompliance } from 'react-icons/gr';
import { Task, TaskTitle } from '../common';

export const CompletedTask: React.FC = () => {
  return (
    <div className='flex w-full flex-col rounded-2xl bg-white p-6 shadow-header transition-all dark:bg-slate-800'>
      <TaskTitle
        iconName={GrCompliance}
        title='completed task'
        className='mb-6'
      />
      <div className='flex flex-col items-center gap-y-[10px]'>
        <Task
          title='Walk the dog'
          descripton='Take the dog to the park and bring treats as well.'
          status='completed'
          date='Completed 2 days ago.'
        />
        <Task
          title='Conduct meeting'
          descripton='Meet with the client and finalize requirements.'
          status='completed'
          date='Completed 2 days ago.'
        />
      </div>
    </div>
  );
};

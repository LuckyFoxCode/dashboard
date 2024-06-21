import { CompletedTask } from '../CompletedTask';
import { TaskStatus } from '../TaskStatus';
import { DashboardHeader } from './components';

export const Dashboard: React.FC = () => {
  return (
    <section className='flex flex-col'>
      <DashboardHeader />
      <div className='flex w-full gap-x-4 rounded-md border px-6 py-5 shadow-header'>
        <div className='w-full rounded-2xl bg-white shadow-header transition-all dark:bg-slate-800'></div>
        <div className='flex flex-col gap-y-4'>
          <TaskStatus />
          <CompletedTask />
        </div>
      </div>
    </section>
  );
};

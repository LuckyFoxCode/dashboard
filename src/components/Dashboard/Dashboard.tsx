import { DashboardHeader } from './components';

export const Dashboard: React.FC = () => {
  return (
    <section className='flex flex-col'>
      <DashboardHeader />
      <div className='flex w-full flex-col rounded-md border px-6 py-5 shadow-header'>
        Dashboard
      </div>
    </section>
  );
};

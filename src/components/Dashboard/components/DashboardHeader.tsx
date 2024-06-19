import { DashboardHeaderInviteUser } from './DashboardHeaderInviteUser';

export const DashboardHeader: React.FC = () => {
  return (
    <div className='mb-9 flex items-center justify-between'>
      <p className='text-dark text-4xl transition-colors dark:text-white'>
        Welcome back, Jhon, 👋
      </p>
      <DashboardHeaderInviteUser />
    </div>
  );
};

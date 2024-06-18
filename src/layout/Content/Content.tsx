import { Outlet } from 'react-router-dom';

export const Content: React.FC = () => {
  return (
    <div className='ml-20 flex flex-1 flex-col'>
      <Outlet />
    </div>
  );
};

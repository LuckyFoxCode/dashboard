import { Icon } from '@/components/common';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section className='relative flex h-dvh w-full items-center justify-center'>
      <span className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[170px] text-slate-300 dark:text-slate-950/50 sm:text-[350px] md:text-[400px] lg:text-[500px] xl:text-[600px]'>
        404
      </span>
      <div className='z-10 flex flex-col items-center font-montserrat transition-all'>
        <p className='mb-4 text-4xl text-slate-700 dark:text-slate-200 md:text-7xl'>
          We lost this page
        </p>
        <span className='mb-4 text-center text-slate-700 dark:text-slate-500'>
          The page you are looking for doesn't exist or has been moved
        </span>
        <Link
          to='/'
          className='flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-montserrat font-bold text-white'
        >
          <Icon
            name={IoArrowBack}
            size={24}
            className='mr-2'
          />
          Back to home
        </Link>
      </div>
    </section>
  );
};

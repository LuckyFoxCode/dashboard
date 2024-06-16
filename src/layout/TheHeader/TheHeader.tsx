import { cn } from '@/libs';
import {
  TheHeaderDate,
  TheHeaderGroupButton,
  TheHeaderLogo,
  TheHeaderSearch,
} from './components';

interface TheHeaderProps {
  className?: string;
}

export const TheHeader: React.FC<TheHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'shadow-header flex w-full items-center justify-between gap-x-4 bg-[#f8f8f8] px-4 pb-3 pt-5 transition-all md:px-8 md:pb-6 md:pt-9 lg:px-16 dark:bg-slate-900',
        className,
      )}
    >
      <TheHeaderLogo className='flex-shrink-0' />
      <TheHeaderSearch className='hidden flex-1 sm:flex' />
      <div className='flex flex-shrink-0 items-center gap-x-5 md:gap-x-10'>
        <TheHeaderGroupButton />
        <TheHeaderDate />
      </div>
    </header>
  );
};

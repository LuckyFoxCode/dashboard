import { cn } from '@/libs';
import { Link } from 'react-router-dom';

interface ModalHeaderProps {
  title: string;
  lineWidth: number;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  lineWidth,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='relative font-montserrat font-bold text-black transition-all dark:text-white'>
        <span>{title}</span>
        <div
          className={cn(
            'absolute bottom-0 left-0 h-[1px] w-0 bg-rose-500',
            `w-[${lineWidth}px]`,
          )}
        />
      </div>
      <Link
        to={'/'}
        className='border-b border-slate-800 font-montserrat capitalize text-black transition-all duration-300 hover:border-rose-500 dark:border-slate-300 dark:text-white'
      >
        go back
      </Link>
    </div>
  );
};

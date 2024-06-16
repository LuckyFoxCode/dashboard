import { cn } from '@/libs';
import { Link } from 'react-router-dom';

interface TheHeaderLogoProps {
  className?: string;
}

export const TheHeaderLogo: React.FC<TheHeaderLogoProps> = ({ className }) => {
  return (
    <Link
      to='/'
      className={cn(className)}
    >
      <h1 className='text-2xl font-semibold text-rose-500'>
        ToDo
        <span className='text-black transition-all dark:text-white'>HQ</span>
      </h1>
    </Link>
  );
};

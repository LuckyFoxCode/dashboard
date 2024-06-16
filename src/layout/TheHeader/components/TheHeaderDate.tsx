import { cn } from '@/libs';
import { format } from 'date-fns';

interface TheHeaderDateProps {
  className?: string;
}

export const TheHeaderDate: React.FC<TheHeaderDateProps> = ({ className }) => {
  const today = new Date();
  const formatedDay = format(today, 'EEEE');
  const formatedFullDate = format(today, 'MM/dd/yyyy');

  return (
    <div
      className={cn('flex flex-col items-center font-montserrat', className)}
    >
      <span className='font-semibold text-black transition-all dark:text-white'>
        {formatedDay}
      </span>
      <span className='text-sm text-cyan-500'>{formatedFullDate}</span>
    </div>
  );
};

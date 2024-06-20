import { cn } from '@/libs';

interface ProgressRingProps {
  className?: string;
  progress: number;
  title: string;
  color: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  title,
  color,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='relative mb-5 flex size-[100px] items-center justify-center rounded-full border-[10px] border-slate-400'>
        <span className='font-montserrat text-xl text-black transition-all dark:text-white'>
          {progress}%
        </span>
      </div>
      <div className='flex items-center'>
        <div className={cn('mr-2 size-2 rounded-full', `bg-${color}-500`)} />
        <p className='text-[15px] capitalize text-black transition-all dark:text-white'>
          {title}
        </p>
      </div>
    </div>
  );
};

import { cn } from '@/libs';

interface TaskProps {
  className?: string;
  title: string;
  descripton: string;
  status: string;
  date: string;
}

export const Task: React.FC<TaskProps> = ({
  className,
  title,
  descripton,
  status,
  date,
}) => {
  return (
    <div
      className={cn(
        'flex w-full justify-between rounded-2xl border border-slate-500 bg-white px-4 py-[10px] transition-all dark:bg-slate-800',
        className,
      )}
    >
      <div className='relative flex w-full max-w-[210px] flex-col pl-7'>
        <div className='absolute left-0 top-[6px] flex size-3 rounded-full border-2 border-green-500' />
        <h3 className='mb-3 font-semibold text-black transition-all dark:text-white'>
          {title}
        </h3>
        <p className='mb-3 w-full max-w-[180px] text-sm text-slate-400'>
          {descripton}
        </p>
        <p className='mb-[10px] text-xs text-black transition-all dark:text-white'>
          Status: <span className='capitalize text-green-500'>{status}</span>
        </p>
        <p className='text-xs text-slate-400'>{date}</p>
      </div>
      <div className='ml-2 mt-3 flex size-[88px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500'></div>
    </div>
  );
};

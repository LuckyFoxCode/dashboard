import { cn } from '@/libs';
import { ModalHeader } from './components';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  lineWidth: number;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  title,
  lineWidth,
}) => {
  return (
    <div className='relative flex h-dvh w-full items-center justify-center bg-slate-900'>
      <div
        className={cn(
          'flex flex-col rounded-md bg-white transition-all dark:bg-slate-800',
          className,
        )}
      >
        <ModalHeader
          title={title}
          lineWidth={lineWidth}
        />
        {children}
      </div>
    </div>
  );
};

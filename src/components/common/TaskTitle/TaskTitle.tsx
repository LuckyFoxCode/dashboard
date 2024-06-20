import { cn } from '@/libs';
import { IconType } from 'react-icons';
import { Icon } from '../Icon';

interface TaskTitleProps {
  title: string;
  iconName: IconType;
  className?: string;
}

export const TaskTitle: React.FC<TaskTitleProps> = ({
  className,
  iconName,
  title,
}) => {
  return (
    <div className={cn('flex', className)}>
      <Icon
        name={iconName}
        className='mr-2 text-slate-400'
        size={22}
      />
      <h1 className='font-semibold capitalize text-rose-500'>{title}</h1>
    </div>
  );
};

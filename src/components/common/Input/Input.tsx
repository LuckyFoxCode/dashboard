import { cn } from '@/libs';
import { IconType } from 'react-icons';
import { Icon } from '../Icon';

interface InputProps {
  iconName: IconType;
  type?: string;
  name?: string;
  value?: string;
  iconSize?: number;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  iconName,
  iconSize,
  ...rest
}) => {
  return (
    <div className='relative'>
      <Icon
        name={iconName}
        size={iconSize}
        className='absolute left-5 top-1/2 -translate-y-1/2'
      />
      <input
        {...rest}
        className={cn(
          'w-full rounded-lg border-2 border-gray-300 py-5 pl-[70px] font-montserrat text-slate-800 shadow shadow-transparent outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:shadow-blue-300',
          className,
        )}
      />
    </div>
  );
};

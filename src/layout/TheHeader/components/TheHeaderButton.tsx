import { Icon } from '@/components/common';
import { cn } from '@/libs';
import { IconType } from 'react-icons';

interface TheHeaderButtonProps {
  iconName: IconType;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const TheHeaderButton: React.FC<TheHeaderButtonProps> = ({
  iconName,
  size,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        'flex size-8 items-center justify-center rounded-lg bg-rose-500 text-white transition-all duration-300 hover:bg-rose-600 active:text-blue-400',
        className,
      )}
    >
      <Icon
        size={size}
        name={iconName}
      />
    </button>
  );
};

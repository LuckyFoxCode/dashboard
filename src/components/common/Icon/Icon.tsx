import { cn } from '@/libs';
import { IconType } from 'react-icons';

interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name: IconComponent,
  size = 16,
  className,
}) => {
  return (
    <IconComponent
      size={size}
      className={cn(className)}
    />
  );
};

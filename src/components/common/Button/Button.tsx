import { cn } from '@/libs';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        'min-w-[130px] rounded-md border-2 border-rose-400 bg-rose-400 py-5 font-montserrat text-white outline-none transition-colors duration-300 hover:border-rose-500 hover:bg-rose-500 focus:border-rose-500 active:bg-rose-600 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300',
        className,
      )}
    >
      {children}
    </button>
  );
};

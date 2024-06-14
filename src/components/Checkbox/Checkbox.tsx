import { cn } from '@/libs';
import { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { Icon } from '../Icon';

export const Checkbox: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className='relative flex'>
      <input
        type='checkbox'
        className='hidden'
        checked={checked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        onClick={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        className={cn(
          'flex size-5 cursor-pointer items-center justify-center rounded-[5px] border-2 border-gray-300 bg-inherit shadow-sm shadow-transparent transition-colors duration-300',
          checked ? 'border-blue-500 bg-blue-500' : 'bg-white',
          focused && 'border-blue-500 shadow-blue-400 outline-none',
        )}
      >
        {checked && (
          <Icon
            name={IoCheckmark}
            className='text-white'
          />
        )}
      </div>
    </div>
  );
};

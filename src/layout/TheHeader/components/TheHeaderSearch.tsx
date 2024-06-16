import { Icon } from '@/components/common';
import { cn } from '@/libs';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface TheHeaderSearchProps {
  className?: string;
}

export const TheHeaderSearch: React.FC<TheHeaderSearchProps> = ({
  className,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative w-full max-w-[695px]', className)}
    >
      <input
        type='text'
        value={value}
        onChange={handleChange}
        className='shadow-header w-full rounded-lg bg-white py-2 pl-3 pr-10 font-montserrat text-xs text-slate-800 placeholder:text-slate-400'
        placeholder='Search your task here...'
      />
      <button
        type='submit'
        className='absolute right-0 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg bg-rose-500 text-white'
      >
        <Icon
          name={CiSearch}
          size={18}
        />
      </button>
    </form>
  );
};

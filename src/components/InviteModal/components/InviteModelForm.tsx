import { useState } from 'react';

export const InviteModelForm: React.FC = () => {
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
      className='flex items-end'
      onSubmit={handleSubmit}
    >
      <label
        htmlFor='invite'
        className='mr-2 flex flex-1 flex-col'
      >
        <span className='mb-2 font-montserrat text-sm font-semibold text-black transition-all dark:text-white'>
          Email
        </span>
        <input
          id='invite'
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='neerajgurung99@gmail.com'
          className='rounded-md border border-slate-400 px-4 py-[9px] font-montserrat text-xs text-slate-500 shadow shadow-transparent outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-blue-500 focus:shadow-blue-300'
        />
      </label>
      <button
        type='submit'
        className='min-w-[120px] rounded-md bg-rose-500 py-[10px] font-montserrat text-xs capitalize text-white shadow shadow-transparent outline-none transition-all hover:bg-rose-600 focus:bg-rose-600 focus:shadow-blue-300'
      >
        send invite
      </button>
    </form>
  );
};

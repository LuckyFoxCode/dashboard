import { useState } from 'react';
import { IoLockClosed, IoPerson } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Input } from '../common';

export const SignIn: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setChecked(false);
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <div className='flex h-[calc(100vh-16px)] w-full max-w-[640px] flex-col items-start justify-center rounded-lg border bg-white px-2 py-4 font-montserrat shadow-md sm:p-10 md:h-auto md:min-h-[820px]'>
      <h2 className='mb-3 text-center text-3xl font-bold text-gray-800 sm:mb-5 md:text-left'>
        Sign In
      </h2>

      <form
        onSubmit={handleSubmit}
        className='mb-4 flex w-full flex-col gap-y-2 sm:gap-y-5'
      >
        <Input
          onChange={handleChange}
          value={user.username}
          iconName={IoPerson}
          name='username'
          placeholder='Username'
          type='text'
        />
        <Input
          onChange={handleChange}
          value={user.password}
          iconName={IoLockClosed}
          name='password'
          placeholder='Password'
          type='password'
        />
        <div className='flex items-center gap-x-3 md:gap-x-6'>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className='text-slate-800'>Remember Me</span>
        </div>
        <Button
          disabled={!checked}
          type='submit'
          className='w-full py-3 md:w-fit md:py-5'
        >
          Login
        </Button>
      </form>
      <div className='flex gap-x-1'>
        <p className='text-slate-700'>Already have an account?</p>
        <Link
          to='/register'
          className='flex text-blue-400 transition-colors duration-300 hover:text-blue-500'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

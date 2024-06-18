import { UserRegister } from '@/libs';
import { useState } from 'react';
import {
  IoLockClosed,
  IoLockClosedOutline,
  IoMail,
  IoPerson,
  IoPersonOutline,
} from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Input } from '../common';

export const SignUp: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserRegister[]>([]);
  const [user, setUser] = useState<UserRegister>({
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID(),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setChecked(false);
    setUser({
      id: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    navigate('/');
  };

  return (
    <div className='w-full max-w-[640px] rounded-lg border bg-white px-2 py-4 font-montserrat shadow-md sm:p-10'>
      <h2 className='mb-3 text-center text-3xl font-bold text-gray-800 sm:mb-5 md:text-left'>
        Sign Up
      </h2>
      <form
        onSubmit={handleSubmit}
        className='mb-4 flex w-full flex-col gap-y-2 sm:gap-y-5'
      >
        <Input
          iconSize={24}
          iconName={IoPersonOutline}
          type='text'
          name='firstName'
          value={user.firstName}
          onChange={handleChange}
          placeholder='Enter First Name'
        />
        <Input
          iconSize={24}
          iconName={IoPersonOutline}
          type='text'
          name='lastName'
          value={user.lastName}
          onChange={handleChange}
          placeholder='Enter Last Name'
        />
        <Input
          iconSize={24}
          iconName={IoPerson}
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
          placeholder='Enter Username'
        />
        <Input
          iconSize={24}
          iconName={IoMail}
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Enter Email'
        />
        <Input
          iconSize={24}
          iconName={IoLockClosed}
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <Input
          iconSize={24}
          iconName={IoLockClosedOutline}
          type='password'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        <div className='flex items-center gap-x-3 md:gap-x-6'>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className='text-slate-800'>I agree to all terms</span>
        </div>
        <Button
          disabled={!checked}
          type='submit'
          className='w-full py-3 md:w-fit md:py-5'
        >
          Register
        </Button>
      </form>
      <div className='flex gap-x-1'>
        <p className='text-slate-700'>Already have an account?</p>
        <Link
          to='/login'
          className='flex text-blue-400 transition-colors duration-300 hover:text-blue-500'
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

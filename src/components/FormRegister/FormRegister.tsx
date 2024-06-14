import { UserRegister } from '@/libs';
import { useState } from 'react';
import {
  IoLockClosed,
  IoLockClosedOutline,
  IoMail,
  IoPerson,
  IoPersonOutline,
} from 'react-icons/io5';
import { Button, Checkbox, Input } from '..';

export const FormRegister: React.FC = () => {
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
    setUser({
      id: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='w-full max-w-[640px] rounded-lg border bg-white p-10 font-montserrat shadow-md'>
      <h2 className='mb-5 text-3xl font-bold text-gray-800'>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className='mb-4 flex w-full flex-col gap-y-5'
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
        <div className='flex items-center gap-x-6'>
          <Checkbox />
          <span>I agree to all terms</span>
        </div>
        <Button
          type='submit'
          className='w-fit'
        >
          Register
        </Button>
      </form>
      <div className='flex gap-x-1'>
        <p className='text-slate-700'>Already have an account?</p>
        <a
          href='#'
          className='flex text-blue-400 transition-colors duration-300 hover:text-blue-500'
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

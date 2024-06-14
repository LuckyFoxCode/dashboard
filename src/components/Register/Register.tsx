import {
  IoLockClosed,
  IoLockClosedOutline,
  IoMail,
  IoPerson,
  IoPersonOutline,
} from 'react-icons/io5';
import { Button, Checkbox, Input } from '..';

export const Register: React.FC = () => {
  return (
    <section className='mx-auto max-w-[640px] rounded-lg border bg-white p-10 font-montserrat shadow-md'>
      <h2 className='mb-5 text-3xl font-bold text-gray-800'>Sign Up</h2>
      <form className='mb-4 flex w-full flex-col gap-y-5'>
        <Input
          iconName={IoPersonOutline}
          placeholder='Enter First Name'
          iconSize={24}
        />
        <Input
          iconName={IoPersonOutline}
          placeholder='Enter Last Name'
          iconSize={24}
        />
        <Input
          iconName={IoPerson}
          placeholder='Enter Username'
          iconSize={24}
        />
        <Input
          iconName={IoMail}
          placeholder='Enter Email'
          iconSize={24}
        />
        <Input
          iconName={IoLockClosed}
          placeholder='Enter Password'
          iconSize={24}
        />
        <Input
          iconName={IoLockClosedOutline}
          placeholder='Confirm Password'
          iconSize={24}
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
    </section>
  );
};

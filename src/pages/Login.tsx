import { SignIn } from '@/components';

export const Login: React.FC = () => {
  return (
    <section className='flex h-full w-full items-center justify-center p-2 md:h-screen md:p-0'>
      <SignIn />
    </section>
  );
};

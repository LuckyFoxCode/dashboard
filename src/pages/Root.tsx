import { Aside, TheHeader } from '@/layout';

export const Root: React.FC = () => {
  return (
    <>
      <TheHeader />
      <main className='mt-14 flex'>
        <Aside />
      </main>
    </>
  );
};

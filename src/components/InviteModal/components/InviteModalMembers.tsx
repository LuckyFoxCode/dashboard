export const InviteModalMembers: React.FC = () => {
  const members = [
    { imagePath: '#', name: 'Upashna Gurung', email: 'uppaeygrg332@gmail.com' },
    { imagePath: '#', name: 'Jeremy Lee', email: 'jerrylee1996@gmail.com' },
    { imagePath: '#', name: 'Thomas Park', email: 'parktho123@gmail.com' },
    {
      imagePath: '#',
      name: 'Rachel Takahasi',
      email: 'takahasirae32@gmail.com',
    },
  ];
  return (
    <div className='mb-12 flex flex-col'>
      <h4 className='mb-[10px] font-montserrat text-sm font-semibold text-black transition-all dark:text-white'>
        Members
      </h4>
      <ul className='flex flex-col gap-y-2'>
        {members.map((member) => (
          <li
            key={member.email}
            className='flex items-center'
          >
            <img
              src={member.imagePath}
              alt={member.name}
              className='mr-2 size-11 rounded-full bg-rose-400'
            />
            <div className='flex flex-col'>
              <p className='text-sm font-medium text-black transition-all dark:text-white'>
                {member.name}
              </p>
              <p className='text-[10px] text-slate-400'>{member.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

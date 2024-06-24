import { Modal } from '../common';
import { InviteModalMembers, InviteModelForm } from './components';

export const InviteModal: React.FC = () => {
  return (
    <Modal
      title={'Send an invite to a new member'}
      lineWidth={97}
      className='w-[600px] p-6'
    >
      <div className='mt-9 rounded border border-slate-300 px-3 py-5'>
        <InviteModelForm />
        <InviteModalMembers />
      </div>
    </Modal>
  );
};

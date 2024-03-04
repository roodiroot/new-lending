'use client';

import useModal from '@/hooks/use-modal';
import Modal from '../modal/modal';
import FidbackModalBody from './fidback-modal-body/fidback-modal-body';
import CallWidget from './widgets/call-widget';

const OverlaysCombain = () => {
  const { isOpen, onClose } = useModal();

  return (
    <div>
      <CallWidget />
      <Modal isOpen={isOpen} onClose={onClose}>
        <FidbackModalBody onClose={onClose} />
      </Modal>
    </div>
  );
};

export default OverlaysCombain;

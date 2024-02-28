"use client";

import useModal from "@/hooks/use-modal";
import Modal from "../modal/modal";
import { Icons } from "../icons";
import FidbackModalBody from "./fidback-modal-body/fidback-modal-body";

const OverlaysCombain = () => {
  const { isOpen, onClose } = useModal();

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FidbackModalBody onClose={onClose} />
      </Modal>
    </div>
  );
};

export default OverlaysCombain;

"use client";

import { Icons } from "@/components/icons";
import useModal from "@/hooks/use-modal";

const ModalExitButton = () => {
  const { onClose } = useModal();
  return (
    <div onClick={onClose} className='absolute cursor-pointer top-0 right-0'>
      <Icons.ex className='w-8 h-8 sm:w-12 sm:h-12 stroke-accent dark:stroke-white transition duration-500 hover:scale-110 hover:rotate-90' />
    </div>
  );
};

export default ModalExitButton;

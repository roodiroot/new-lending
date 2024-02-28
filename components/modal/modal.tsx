"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ModalBody from "./modal-body";
import ModalContainer from "./modal-container";
import useScrollbarSize from "react-scrollbar-size";

interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const { width } = useScrollbarSize();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${width}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [isOpen, width]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer onClose={onClose}>
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default Modal;

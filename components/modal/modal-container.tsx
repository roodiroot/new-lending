"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

interface ModalContainerProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}
const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  children,
  className,
  ...props
}) => {
  useEffect(() => {
    const escClickHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onClose) onClose();
      }
    };
    document.addEventListener("keydown", escClickHandler);
    return () => {
      document.removeEventListener("keydown", escClickHandler);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
      onClick={onClose}
      className={cn(
        "fixed inset-0 flex items-center bg-[#040A1A]/90 backdrop-blur-sm z-50 overflow-y-auto overflow-x-hidden p-4 sm:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;

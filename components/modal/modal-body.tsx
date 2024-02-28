"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}
const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.1,
      }}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "mx-auto w-full max-w-2xl lg:max-w-3xl xl:max-w-5xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ModalBody;

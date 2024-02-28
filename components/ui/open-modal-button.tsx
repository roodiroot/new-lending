"use client";

import Button from "@/components/ui/button";
import useModal from "@/hooks/use-modal";

interface HeroactionProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const OpenModalButton: React.FC<HeroactionProps> = ({
  children,
  className,
  ...props
}) => {
  const { onOpen } = useModal();
  return (
    <Button {...props} onClick={onOpen} indigo className={className}>
      {children}
    </Button>
  );
};

export default OpenModalButton;

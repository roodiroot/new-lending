import FormFidbackModal from "@/components/overlays/fidback-modal-body/form-fidback-modal";
import ModalWrapper from "@/components/modal/modal-wrapper";
import ModalTitle from "@/components/modal/modal-title";

interface FidbackModalBodyProps {
  onClose: () => void;
}
const FidbackModalBody: React.FC<FidbackModalBodyProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalTitle title='Заполните данные.' />
      <FormFidbackModal className='mt-16' onClose={onClose} />
    </ModalWrapper>
  );
};

export default FidbackModalBody;

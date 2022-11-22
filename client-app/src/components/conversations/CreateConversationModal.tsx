import { Fragment } from "react";
import { OverlayContainer } from "../../styles";
import { ModalBodyStyle } from "../../styles/ui/modal";
import CreateConversationForm from "../forms/CreateConversation";
import ModalContainer from "../ui/ModalContainer";
import ModalHeader from "../ui/ModalHeader";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateConversationModal = ({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) => {
  return (
    <OverlayContainer show={show}>
      <ModalContainer show={show}>
        <Fragment>
          <ModalHeader>
            <h1>Create a New Conversation</h1>
            <AiOutlineCloseCircle size={22} onClick={onHide} />
          </ModalHeader>
          <ModalBodyStyle>
            <CreateConversationForm />
          </ModalBodyStyle>
        </Fragment>
      </ModalContainer>
    </OverlayContainer>
  );
};

export default CreateConversationModal;

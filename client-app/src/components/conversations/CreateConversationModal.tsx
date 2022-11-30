import {
  createRef,
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useEffect,
} from "react";
import { OverlayContainer } from "../../styles";
import { ModalBodyStyle } from "../../styles/ui/modal";
import CreateConversationForm from "../forms/CreateConversation";
import ModalContainer from "../ui/ModalContainer";
import ModalHeader from "../ui/ModalHeader";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateConversationModal = ({
  show,
  setIsShow,
}: {
  show: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = createRef<HTMLDivElement>();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setIsShow(false);
    }
  };

  return (
    <OverlayContainer show={show} ref={ref} onClick={onClickOverlay}>
      <ModalContainer show={show}>
        <Fragment>
          <ModalHeader>
            <h1>Create a New Conversation</h1>
            <AiOutlineCloseCircle size={24} onClick={() => setIsShow(false)} />
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

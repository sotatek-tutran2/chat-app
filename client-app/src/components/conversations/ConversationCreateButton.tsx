import { TbEdit } from "react-icons/tb";
import { OverlayContainer } from "../../styles";

type IProps = {
  isShow: boolean;
  toggleModal: () => void;
};

const ConversationCreateButton = (props: IProps) => {
  return (
    <>
      <TbEdit size={32} onClick={props.toggleModal} />
      <OverlayContainer show={props.isShow} onClick={props.toggleModal}>
        ahahaha
      </OverlayContainer>
    </>
  );
};

export default ConversationCreateButton;

import { useState, Fragment } from "react";
import { TbEdit } from "react-icons/tb";
import CreateConversationModal from "./CreateConversationModal";

const ConversationCreateButton = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Fragment>
      <TbEdit size={32} onClick={() => setIsShow(true)} />
      <CreateConversationModal
        show={isShow}
        onHide={() => {
          setIsShow(false);
        }}
      />
    </Fragment>
  );
};

export default ConversationCreateButton;

import { useState, Fragment } from "react";
import { TbEdit } from "react-icons/tb";
import CreateConversationModal from "./CreateConversationModal";

const ConversationCreateButton = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Fragment>
      <TbEdit size={32} onClick={() => setIsShow(true)} />
      <CreateConversationModal show={isShow} setIsShow={setIsShow} />
    </Fragment>
  );
};

export default ConversationCreateButton;

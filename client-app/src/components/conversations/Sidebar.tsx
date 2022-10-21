import { TbEdit } from "react-icons/tb";
import { ConversationsSidebar } from "../../styles";

const Sidebar = () => {
  return (
    <ConversationsSidebar>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={32} />
      </header>
    </ConversationsSidebar>
  );
};

export default Sidebar;

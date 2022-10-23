import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IConversation } from "../../interfaces";
import {
  ConversationSidebarContainer,
  ConversationSidebarItem,
  ConversationsSidebar,
  ConversationsSidebarHeader,
} from "../../styles";
import styles from "./index.module.scss";

const Sidebar = ({ conversations }: { conversations: IConversation[] }) => {
  const navigate = useNavigate();

  return (
    <ConversationsSidebar>
      <ConversationsSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={32} />
      </ConversationsSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map(({ id, name, lastMessage }) => (
          <ConversationSidebarItem
            key={id}
            onClick={() => navigate(`/conversations/${id}`)}
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{name}</span>
              <p className={styles.conversationLastMessage}>{lastMessage}</p>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </ConversationsSidebar>
  );
};

export default Sidebar;

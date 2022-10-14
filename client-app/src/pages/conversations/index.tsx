import { Outlet } from "react-router-dom";
import ConversationPanel from "../../components/conversations/ConversationPanel";
import ConversationsSidebar from "../../components/conversations/Sidebar";
import { Page } from "../../styles";

const Conversations = () => {
  return (
    <Page alignItems="flex-start" justifyContent="flex-start">
      <ConversationsSidebar />
      <ConversationPanel />
      <Outlet />
    </Page>
  );
};

export default Conversations;

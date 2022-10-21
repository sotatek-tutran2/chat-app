import { Outlet, useParams } from "react-router-dom";
import ConversationPanel from "../../components/conversations/ConversationPanel";
import ConversationsSidebar from "../../components/conversations/Sidebar";
import { Page } from "../../styles";

const Conversations = () => {
  const { id } = useParams();

  return (
    <Page alignItems="flex-start" justifyContent="flex-start">
      <ConversationsSidebar />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};

export default Conversations;

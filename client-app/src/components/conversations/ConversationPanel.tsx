import useAuth from "../../hooks/useAuth";
import { ConversationPannelContainer } from "../../styles";

const ConversationPanel = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <ConversationPannelContainer>
      <h1>ConversationPanel</h1>
    </ConversationPannelContainer>
  );
};

export default ConversationPanel;

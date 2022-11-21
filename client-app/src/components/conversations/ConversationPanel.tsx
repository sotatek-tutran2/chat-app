import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../context";
import { ConversationPannelContainer } from "../../styles";

const ConversationPanel = () => {
  const { user } = useContext<AuthContextType>(AuthContext);
  console.log(user);

  return (
    <ConversationPannelContainer>
      <h1>ConversationPanel - {user?.email}</h1>
    </ConversationPannelContainer>
  );
};

export default ConversationPanel;

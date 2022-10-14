import { useParams } from "react-router-dom";
import { ConversationChannelContainer } from "../../styles";

const ConversationChannel = () => {
  const { id } = useParams();

  return (
    <ConversationChannelContainer>
      <h1>ConversationChannelContainer {id}</h1>
    </ConversationChannelContainer>
  );
};

export default ConversationChannel;

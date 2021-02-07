import { useContext } from "react";
import { ChatContext } from "../../context/chatContext/chatContext";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";

const MessageItem = ({ msg }) => {
  const {
    chatState: { userActive },
  } = useContext(ChatContext);

  return (
    <>
      {userActive.id === msg.emitter ? (
        <IncomingMessage msg={msg} />
      ) : (
        <OutgoingMessage msg={msg} />
      )}
    </>
  );
};

export default MessageItem;

import { useContext } from "react";
import { ChatContext } from "../../context/chatContext/chatContext";
import ChatEmpty from "./ChatEmpty";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const { chatState } = useContext(ChatContext);
  const { userActive, messages } = chatState;

  return (
    <div className="list-messages" id="content-scroll">
      {userActive ? (
        messages.map((msg) => <MessageItem key={msg.id} msg={msg} />)
      ) : (
        <ChatEmpty />
      )}
    </div>
  );
};

export default MessageList;

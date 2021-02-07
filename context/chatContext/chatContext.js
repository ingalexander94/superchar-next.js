import { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const initialState = {
  userActive: null,
  messages: [],
  users: [],
  filter: "",
};

const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

import { createContext, useContext, useEffect } from "react";
import { scrollBottom } from "../helpers/pipes";
import types from "../helpers/types";
import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./authContext";
import { ChatContext } from "./chatContext/chatContext";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, isOnline, connectServer, disconnectServer } = useSocket(
    process.env.NEXT_PUBLIC_SOCKET_URL
  );
  const { auth: user } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (!user) disconnectServer();
  }, [user, disconnectServer]);

  useEffect(() => {
    if (user) connectServer();
  }, [user, connectServer]);

  useEffect(() => {
    socket?.on("list-users", (users) =>
      dispatch({
        type: types.LOAD_USERS,
        payload: users,
      })
    );
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("private-message", (message) => {
      dispatch({
        type: types.ADD_NEW_MESSAGE,
        payload: message,
      });
      scrollBottom();
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("user-typing", ({ emitter, isTyping }) => {
      dispatch({
        type: types.SET_TYPING,
        payload: {
          emitter,
          isTyping,
        },
      });
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        isOnline,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;

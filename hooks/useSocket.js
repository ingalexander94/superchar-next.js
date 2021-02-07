import { useCallback, useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { AuthContext } from "../context/authContext";

export const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const {
    auth: { token },
  } = useContext(AuthContext);

  const connectServer = useCallback(() => {
    const socketTemp = io.connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        "x-token": token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath, token]);

  const disconnectServer = useCallback(() => socket?.disconnect(), [socket]);

  useEffect(() => setIsOnline(socket?.connected), [socket]);
  useEffect(() => socket?.on("connect", () => setIsOnline(true)), [socket]);
  useEffect(() => socket?.on("disconnect", () => setIsOnline(false)), [socket]);

  return {
    socket,
    isOnline,
    connectServer,
    disconnectServer,
  };
};

import Head from "next/head";
import { fetchWithToken } from "../helpers/fetch";
import { parseCookie } from "../lib/parseCookies";
import Title from "../components/chat/Title";
import UserList from "../components/chat/UserList";
import MessageList from "../components/chat/MessageList";
import Logout from "../components/chat/Logout";
import TextSend from "../components/chat/TextSend";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext/chatContext";
import SearchUser from "../components/chat/SearchUser";

const Chat = () => {
  const { show } = useContext(AuthContext);
  const {
    chatState: { userActive },
  } = useContext(ChatContext);

  const description = "Seleccione una persona para iniciar una conversación";

  return (
    <>
      <Head>
        <title>SuperChat | Messages</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
      <div className="container">
        <div className={`chat-container ${show ? "to-users" : ""}`}>
          <SearchUser />
          <Title />
          <UserList />
          <MessageList />
          <Logout />
          {userActive && <TextSend />}
        </div>
      </div>
    </>
  );
};

export default Chat;

export const getServerSideProps = async ({ req, res }) => {
  const cookies = parseCookie(req);
  const request = await fetchWithToken("auth/renew", cookies.token || "");
  const props = await request.json();
  if (res && !props.ok) {
    res.writeHead(401, { location: "/" }).end();
  }
  return { props };
};

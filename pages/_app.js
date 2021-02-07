import { SEO } from "../components/SEO";
import AuthProvider from "../context/authContext";
import ChatProvider from "../context/chatContext/chatContext";
import SocketProvider from "../context/socketContext";
import globalAuth from "../styles/global.auth";
import globalChat from "../styles/global.chat";

const _app = ({ Component, pageProps }) => {
  return (
    <ChatProvider>
      <AuthProvider authState={pageProps}>
        <SocketProvider>
          <SEO />
          <main>
            <Component {...pageProps} />
          </main>
          {!pageProps.ok ? (
            <style jsx global>
              {globalAuth}
            </style>
          ) : (
            <style jsx global>
              {globalChat}
            </style>
          )}
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};

export default _app;

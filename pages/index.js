import Head from "next/head";
import { useContext } from "react";
import FormLogin from "../components/auth/FormLogin";
import FormRegister from "../components/auth/FormRegister";
import Panel from "../components/auth/Panel";
import Background from "../components/Background";
import { AuthContext } from "../context/authContext";
import { fetchWithToken } from "../helpers/fetch";
import { parseCookie } from "../lib/parseCookies";

const index = () => {
  const { show } = useContext(AuthContext);
  const description =
    "Realizar el proceso de autenticación para ingresar al SuperChat";
  return (
    <>
      <Head>
        <title>SuperChat | Auth</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={`container ${!show ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <FormLogin />
          <FormRegister />
        </div>
        <div className="panels-container">
          <Panel position="left" />
          <Panel position="right" />
          <Background />
        </div>
      </div>
      <style jsx>{`
        .panels-container {
          height: 100%;
          left: 0;
          top: 0;
          width: 80%;
        }
      `}</style>
    </>
  );
};

export default index;

export const getServerSideProps = async ({ req, res }) => {
  const cookies = parseCookie(req);
  const request = await fetchWithToken("auth/renew", cookies.token || "");
  const props = await request.json();
  if (res && props.ok) {
    res.writeHead(401, { location: "/chat" }).end();
  }
  return { props };
};

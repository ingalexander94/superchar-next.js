import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext/chatContext";
import types from "../../helpers/types";
import Writing from "./Writing";

const Title = () => {
  const { show, setShow } = useContext(AuthContext);
  const { chatState, dispatch } = useContext(ChatContext);

  const { userActive } = chatState;

  const handleGoBack = () => {
    setShow(!show);
    dispatch({
      type: types.CLEAR_ACTIVE,
    });
  };

  return (
    <>
      <div className="title">
        <i onClick={handleGoBack} className="fas fa-arrow-left fa-lg" />
        <h2>{userActive ? userActive.name : ""}</h2>
        {userActive && userActive.isTyping && <Writing />}
        <i onClick={handleGoBack} className="fas fa-times fa-2x fa-sm" />
      </div>
      <style jsx>
        {`
          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-blue);
            color: white;
            border-bottom: 2px solid var(--background-secondary);
            border-top-right-radius: 10px;
          }

          .title * {
            margin: 15px 20px;
          }
        `}
      </style>
    </>
  );
};

export default Title;

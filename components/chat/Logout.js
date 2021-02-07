import { useContext } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext/chatContext";
import types from "../../helpers/types";

const initialState = {
  user: null,
  token: "",
};

const Logout = () => {
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);
  const {
    chatState: { users },
    dispatch,
  } = useContext(ChatContext);

  const logout = async () => {
    Cookie.remove("token");
    setAuth(initialState);
    dispatch({
      type: types.CLEAR_ACTIVE,
    });
    await router.replace("/");
  };

  const countUsersOnline = () =>
    users.filter((user) => user.isOnline).length - 1;

  return (
    <>
      <div className="add-user">
        <i onClick={logout} title="Salir" className="fas fa-power-off fa-2x" />
        <p>{countUsersOnline()} En Linea</p>
      </div>
      <style jsx>
        {`
          .add-user {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 20px;
            border-bottom-left-radius: 10px;
            border-top: 1px solid var(--border-blue);
          }

          .add-user p {
            margin-right: 20px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Logout;

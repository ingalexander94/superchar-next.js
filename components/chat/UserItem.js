import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext/chatContext";
import { fetchWithToken } from "../../helpers/fetch";
import { scrollBottom } from "../../helpers/pipes";
import types from "../../helpers/types";

const UserItem = ({ user }) => {
  const { dispatch } = useContext(ChatContext);
  const {
    auth: { token },
  } = useContext(AuthContext);

  const { id, name, isOnline } = user;

  const handleActiveUser = async () => {
    const request = await fetchWithToken(`chat/${id}`, token);
    const { chat } = await request.json();

    dispatch({
      type: types.ACTIVE_USER,
      payload: { id, name },
    });

    dispatch({
      type: types.LOAD_CHAT,
      payload: chat,
    });

    scrollBottom();
  };

  return (
    <>
      <div className="new-user-online" onClick={handleActiveUser}>
        <img
          src="https://pbs.twimg.com/profile_images/443813492328370176/AhcCOt1Q.png"
          alt="foto del usuario"
        />
        <div className="info-msg">
          <h3>
            {name}
            {/* <span className="fas fa-envelope"></span> */}
          </h3>
          <p className={isOnline ? "online" : "offline"}>
            {isOnline ? "En Linea" : "Desconectado"}
          </p>
        </div>
      </div>
      <style jsx>{`
        .new-user-online {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80px;
          width: 100%;
          font-size: 15px;
          color: var(--border-gray);
          border-bottom: 2px solid var(--border-blue);
          cursor: pointer;
        }

        .new-user-online:hover {
          background: var(--color-active);
          color: var(--color-blue) !important;
          transition: all 0.5s ease;
        }
        .new-user-online:hover * {
          color: var(--color-blue) !important;
        }

        .new-user-online .info-msg {
          display: block;
          margin-left: 10px;
          width: 75%;
        }

        .new-user-online .info-msg * {
          margin: 0;
        }

        .new-user-online .info-msg h3 {
          color: white;
          font-size: 15px;
        }

        .new-user-online .info-msg h3 > span {
          font-size: 20px;
          float: right;
          color: cyan;
          padding-top: 10px;
          padding-right: 15px;
        }

        .online::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          background: chartreuse;
          margin-right: 5px;
          margin-bottom: 2px;
        }

        .online {
          color: chartreuse;
        }

        .offline::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          background: rgb(231, 23, 65);
          margin-right: 5px;
          margin-bottom: 2px;
        }

        .offline {
          color: rgb(231, 23, 65);
        }
        .active,
        .active * {
          background: var(--color-active);
          color: var(--color-blue) !important;
        }
      `}</style>
    </>
  );
};

export default UserItem;

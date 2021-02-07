import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext/chatContext";
import { filterUsers } from "../../helpers/actions";
import UserItem from "./UserItem";

const UserList = () => {
  const { show, setShow, auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const { users, filter } = chatState;

  const handleChangeView = () => setTimeout(() => setShow(!show), 500);

  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    setCurrentUsers(filterUsers(users, filter));
  }, [users, filter]);

  return (
    <div className="list-users" id="users">
      <div onClick={handleChangeView}>
        {auth.user &&
          currentUsers.map(
            (user) =>
              user.id !== auth.user.id && <UserItem key={user.id} user={user} />
          )}
      </div>
    </div>
  );
};

export default UserList;

import { useContext } from "react";
import { ChatContext } from "../../context/chatContext/chatContext";
import types from "../../helpers/types";
import { useForm } from "../../hooks/useForm";

const SearchUser = () => {
  const [{ user }, handleInputChange, reset] = useForm({
    user: "",
  });

  const { dispatch } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.trim().length) return;
    dispatch({
      type: types.SET_FILTER,
      payload: user.trim(),
    });
  };

  const resetUsers = () => {
    reset();
    dispatch({
      type: types.SET_FILTER,
      payload: "",
    });
  };

  return (
    <>
      <div className="search-users">
        <form onSubmit={handleSubmit} className="form-input">
          <i className="fas fa-search" />
          <input
            value={user}
            name="user"
            autoComplete="off"
            onChange={handleInputChange}
            type="text"
            placeholder="Buscar"
            required
          />
          <i onClick={resetUsers} className="fas fa-sync" />
        </form>
      </div>
      <style jsx>{`
        .search-users {
          border-top-left-radius: 10px;
          border-bottom: 2px solid var(--border-blue);
        }

        .search-users .form-input {
          background: var(--background-secondary);
          width: 80%;
          padding: 0 10px;
          margin: 10px 0;
          border-radius: 3px;
        }

        .search-users .form-input * {
          background: var(--background-secondary);
          color: white;
        }

        .fa-sync {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default SearchUser;

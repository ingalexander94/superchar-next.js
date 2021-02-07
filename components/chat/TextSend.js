import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext/chatContext";
import { SocketContext } from "../../context/socketContext";
import { useForm } from "../../hooks/useForm";

const TextSend = () => {
  const { socket } = useContext(SocketContext);
  const [isTyping, setIsWriting] = useState(false);
  const [myTimeout, setMyTimeout] = useState(null);
  const {
    auth: { user },
  } = useContext(AuthContext);
  const {
    chatState: { userActive },
  } = useContext(ChatContext);

  const [{ text }, handleInputChange, reset] = useForm({
    text: "",
  });

  useEffect(() => {
    socket.emit("user-typing", {
      isTyping,
      emitter: user.id,
      receiver: userActive.id,
    });
  }, [isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const payload = {
      emitter: user.id,
      receiver: userActive.id,
      text: text.trim(),
    };
    socket.emit("private-message", payload);
    reset();
  };

  const handleStopWriting = () => {
    clearInterval(myTimeout);
    setMyTimeout(
      setTimeout(() => {
        setIsWriting(false);
      }, 500)
    );
  };

  const handleChange = (e) => {
    setIsWriting(true);
    handleInputChange(e);
  };

  return (
    <>
      <div className="text">
        <form onSubmit={handleSubmit} className="form-text">
          <input
            type="text"
            autoFocus={true}
            name="text"
            value={text}
            autoComplete="off"
            onChange={handleChange}
            onKeyDown={handleStopWriting}
            placeholder="Escriba su mensaje..."
            required
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .text {
            background: var(--color-blue);
            color: var(--color-blue);
            border-bottom-right-radius: 10px;
            border-top: 1px solid var(--background-secondary);
          }

          .form-text {
            height: 100%;
          }

          .form-text input {
            border: 1px solid var(--background-secondary);
            height: 25px;
            margin-left: 10px;
            width: 85%;
            font-weight: bold;
            border-radius: 5px;
          }

          .form-text button {
            border: none;
            background: transparent;
            color: cyan;
            font-size: 25px;
            cursor: pointer;
          }

          .form-text button:focus {
            outline: none;
          }

          .form-text input::placeholder {
            color: var(--color-blue);
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default TextSend;

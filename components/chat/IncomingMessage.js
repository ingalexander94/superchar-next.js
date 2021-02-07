import { formatDate } from "../../helpers/pipes";

const IncomingMessage = ({ msg }) => {
  return (
    <>
      <div className="new-message">
        <img
          src="https://pbs.twimg.com/profile_images/443813492328370176/AhcCOt1Q.png"
          alt="Foto de perfil"
        />
        <div className="text-msg">
          <p>{msg.text}</p>
          <p>{formatDate(msg.createdAt)}</p>
        </div>
      </div>
      <style jsx>
        {`
          .new-message {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 20px;
            margin-top: 20px;
          }

          .new-message .text-msg {
            margin-left: 20px;
            width: auto;
            max-width: 75%;
          }

          .new-message .text-msg * {
            margin: 0;
          }

          .new-message .text-msg p:nth-child(1) {
            background: var(--color-blue);
            color: white;
            padding: 10px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            font-weight: bold;
          }
          .new-message .text-msg p:nth-child(2) {
            color: white;
            font-size: 12px;
            font-weight: bold;
            padding-top: 5px;
          }
        `}
      </style>
    </>
  );
};

export default IncomingMessage;

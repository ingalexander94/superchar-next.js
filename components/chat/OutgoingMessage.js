import { formatDate } from "../../helpers/pipes";

const OutgoingMessage = ({ msg }) => {
  return (
    <>
      <div className="my-message">
        <div className="text-msg">
          <p>{msg.text}</p>
          <p>{formatDate(msg.createdAt)}</p>
        </div>
      </div>
      <style jsx>
        {`
          .my-message {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          .my-message .text-msg {
            margin-right: 20px;
            padding: 10px;
            width: auto;
            max-width: 75%;
          }

          .my-message .text-msg p:nth-child(1) {
            background: var(--color-active);
            color: var(--color-blue);
            padding: 10px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-weight: bold;
          }

          .my-message .text-msg p:nth-child(2) {
            color: white;
            font-size: 12px;
            font-weight: bold;
            text-align: right;
            padding-top: 5px;
          }

          .my-message .text-msg * {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default OutgoingMessage;

const ChatEmpty = () => {
  return (
    <>
      <div className="empty">
        <i className="fas fa-envelope-open-text fa-4x"></i>
        <h1>Seleccione una persona</h1>
        <p>Para iniciar una conversación</p>
      </div>
      <style jsx>{`
        .empty {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: white;
        }

        .empty * {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default ChatEmpty;

const Background = () => {
  return (
    <>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>
        {`
          .box div {
            background-color: transparent;
            border: 6px solid var(--background);
            height: 60px;
            position: absolute;
            width: 60px;
          }

          .box div:nth-child(1) {
            animation: animate 10s linear infinite;
            left: 42%;
            top: 12%;
          }

          .box div:nth-child(2) {
            animation: animate 7s linear infinite;
            left: 50%;
            top: 70%;
          }

          .box div:nth-child(3) {
            animation: animate 9s linear infinite;
            left: 6%;
            top: 17%;
          }

          .box div:nth-child(4) {
            animation: animate 10s linear infinite;
            left: 65%;
            top: 30%;
          }

          .box div:nth-child(5) {
            animation: animate 6s linear infinite;
            left: 10%;
            top: 90%;
            border-radius: 50%;
          }

          .box div:nth-child(6) {
            animation: animate 12s linear infinite;
            left: 70%;
            top: 90%;
            border-radius: 50%;
          }

          .box div:nth-child(7) {
            animation: animate 15s linear infinite;
            left: 90%;
            top: 80%;
          }

          .box div:nth-child(8) {
            animation: animate 16s linear infinite;
            left: 25%;
            border-radius: 50%;
            top: 22%;
          }

          .box div:nth-child(9) {
            animation: animate 9s linear infinite;
            left: 25%;
            top: 90%;
          }

          .box div:nth-child(10) {
            animation: animate 5s linear infinite;
            left: 80%;
            top: 20%;
            border-radius: 50%;
          }

          @keyframes animate {
            0% {
              opacity: 1;
              transform: scale(0) translateY(0) rotate(0);
            }
            100% {
              opacity: 0;
              transform: scale(1.2) translateY(-90px) rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Background;

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Panel = ({ position }) => {
  const { show, setShow } = useContext(AuthContext);
  const isLeft = position === "left";

  return (
    <>
      <div className={`panel-${position}`}>
        <h1>{isLeft ? "¡Hola de nuevo!" : "¡Hola, Amigo!"}</h1>
        <p>
          {isLeft
            ? "Para mantenerse conectado con nosotros, inicie sesión con su información personal"
            : "Ingrese sus datos personales y comience su viaje con nosotros"}
        </p>
        <a
          onClick={() => setShow(!show)}
          id={isLeft ? "btnLogin" : "btnRegister"}
        >
          {isLeft ? "Ir a Iniciar" : "Registrarse"}
        </a>
      </div>
      <style jsx>{`
        .panel-left,
        .panel-right {
          background: var(--background-dark);
          color: var(--background-white);
        }

        .panel-left {
          padding: 3rem 12% 2rem 12%;
          pointer-events: all;
          transition: 1s ease-in-out;
        }

        .panel-right {
          padding: 3rem 12% 2rem 12%;
          pointer-events: none;
          transform: translateX(-1200px);
          transition: 0s ease-out;
        }

        .panel-left p,
        .panel-right p {
          color: var(--background-white);
          font-weight: 100;
        }
      `}</style>
    </>
  );
};

export default Panel;

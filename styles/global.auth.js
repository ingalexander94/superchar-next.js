import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap");

  :root {
    --background-white: #f0f4f3;
    --background: #38304d;
    --background-cyan: #0df5e3;
    --background-dark: #201a30;
  }

  body,
  html,
  main {
    background: var(--background);
    box-sizing: border-box;
    color: var(--background-white);
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    width: 100vw;
  }

  * {
    font-family: "Didact Gothic", sans-serif;
    scroll-behavior: smooth;
  }

  h1 {
    color: var(--background-white);
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 1px;
    margin: 0;
  }

  a,
  button {
    background: var(--background-cyan);
    border: 2px solid var(--background-white);
    border-radius: 100px;
    color: var(--background-dark);
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 15px;
    padding: 10px 70px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  a:hover,
  button:hover {
    background: #008b8b;
  }

  form {
    overflow: hidden;
    transition: all 0.2s 0.5s;
    transition-delay: 0.5s;
  }

  form input {
    background: var(--background-white);
    border: none;
    color: var(--background-dark);
    font-size: 15px;
    padding: 15px 0;
    padding-left: 5px;
    width: 85%;
  }

  form input:focus {
    outline: none;
  }

  form input::placeholder {
    color: var(--background-dark);
  }

  form .form-control p {
    color: var(--background-cyan);
    margin: 0;
    text-align: left;
  }

  form .form-control .form-input {
    background: var(--background-white);
    border-radius: 5px;
    margin: 15px 0;
    padding-left: 5px;
  }

  form .form-control {
    color: var(--background-dark);
    width: 90%;
  }

  .container {
    overflow: hidden;
    position: relative;
  }

  .container,
  .forms-container,
  .panels-container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .container.sign-up-mode .panel-left {
    transform: translateX(1800px);
    transition: 0s ease-out;
  }

  .container.sign-up-mode .forms-container {
    left: 45%;
  }

  .container.sign-up-mode form.form-login {
    opacity: 1;
    z-index: 2;
  }

  .container.sign-up-mode form.form-register {
    opacity: 0;
    z-index: 1;
  }

  .container.sign-up-mode .panel-right {
    transform: translateX(50%);
    transition: 1s ease-in-out;
  }

  .container.sign-up-mode .panel-left {
    pointer-events: none;
  }

  .container.sign-up-mode .panel-right {
    pointer-events: all;
  }

  .forms-container {
    left: 60%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s 0.5s ease-in-out;
    transition-delay: 0.5s;
    width: 50%;
    z-index: 1000;
  }

  form,
  .panel-left,
  .panel-right {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 870px) {
    .container,
    .forms-container,
    .panels-container {
      flex-direction: column;
    }

    .container {
      min-height: 850px;
    }

    .forms-container {
      width: 100%;
      transform: translate(-20%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .form-login {
      transform: translate(30%, 0);
    }

    .forms-container,
    .container.sign-up-mode .forms-container {
      top: 100%;
      left: 20%;
    }

    .container.sign-up-mode .panel-left {
      transform: translateY(-300px);
    }

    .container.sign-up-mode .panel-right {
      transform: translateY(320px);
    }

    .panel-right {
      transform: translateY(600px);
      z-index: 1000;
    }

    .panel-left {
      transform: translateY(0px);
      z-index: 1000;
    }

    .container.sign-up-mode .forms-container {
      top: 10%;
      transform: translate(-50%, 0);
    }
  }
`;

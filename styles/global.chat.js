import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap");

  :root {
    --background-secondary: #38304d;
    --background-gray: #eeeeee;
    --background-blue: #5f80bf;
    --border-blue: #38304d;
    --border-gray: #c6c6c6;
    --color-blue: #201a30;
    --color-active: #0df5e3;
  }

  body,
  html,
  main {
    background: var(--color-blue);
    box-sizing: border-box;
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

  input {
    outline: none;
    border: none;
    padding: 5px 10px;
    width: 80%;
  }

  input::placeholder {
    color: white;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    height: 40px;
    width: 40px;
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chat-container {
    display: grid;
    background: var(--background-secondary);
    width: 75%;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 1fr 450px 1fr;
    border-radius: 10px;
    border: 2px solid var(--background-secondary);
  }

  .search-users,
  .form-input,
  .form-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-users,
  .list-users,
  .add-user {
    background: var(--color-blue);
    color: white;
  }

  .list-users,
  .list-messages {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .list-users::-webkit-scrollbar,
  .list-messages::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    display: none;
  }

  .list-messages {
    padding-bottom: 20px;
  }

  span,
  .fa-2x {
    cursor: pointer;
  }

  .fa-lg {
    display: none;
  }

  @media (max-width: 800px) {
    .chat-container {
      grid-template-rows: 80px 1fr 80px;
      grid-template-columns: 100% 1fr;
      width: 100%;
      height: 100%;
      border: none;
    }

    .to-users {
      grid-template-columns: 0 100%;
    }

    .search-users {
      border-top-left-radius: 0;
    }

    .add-user {
      border-bottom-left-radius: 0;
    }

    .title {
      border-top-right-radius: 0;
      justify-content: flex-start !important;
    }

    .text {
      border-bottom-right-radius: 0;
    }

    .form-text input {
      width: 70% !important;
    }

    .fa-lg {
      display: inline-block;
    }

    .fa-sm {
      display: none;
    }
  }

  @media (min-width: 801px) and (max-width: 1024px) {
    .chat-container {
      width: 90%;
      grid-template-columns: 25% 1fr;
      grid-template-rows: 80px 1fr 80px;
      border-radius: 10px;
    }
  }
`;

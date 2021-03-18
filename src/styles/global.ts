import { createGlobalStyle } from 'styled-components';

// componente de estilo global da aplicação
export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --background-dark: #222222;
    --shape: #FFFFFF;

    --input-background: #E7E9EE;
    --input-border: #D7D7D7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    //layout tablet e notebook
    @media (max-width: 1080px) {
      font-size: 93.75%; // => 15px
    }
    //layout mobile
    @media (max-width: 700px) {
      font-size: 87.5%; // => 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button:focus, input:focus, textarea:focus {
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  //elementos que estiverem com a opção disabled
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  //Modal
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
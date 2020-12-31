import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        font: 400 14px  Roboto, sans-serif;
    }
    textarea, input, button {
        font: 400 18px  Roboto, sans-serif;
    }
    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }
    button {
        cursor: pointer;
    }
`;

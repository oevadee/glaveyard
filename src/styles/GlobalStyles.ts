import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Nosifer', cursive;
    box-sizing: border-box;
    letter-spacing: 0;
    color: #F7F7FF;
}

html {
    background: #070600;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: #CDCDCD;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
    outline-width: 0;
}

svg:not(:root) {
    overflow: hidden;
}

@media only screen and (max-width: 480px) {
    html {
        font-size: 100%;
    }
}
`;

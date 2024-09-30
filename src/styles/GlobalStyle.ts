import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #090b1a;
        padding: 5rem 2rem;
    }
`
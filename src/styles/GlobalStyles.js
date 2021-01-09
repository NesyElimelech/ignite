import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color:  #242425;
            background-image: linear-gradient(to bottom, #e33e3e , #111111 );
            border-radius: 1rem;
        }

    }

    body{
        background-color: #262627;
        font-family: 'Montserrat', sans-serif;
        min-width: 100%;
        color: #f3f3f3;
    }

    h2{
        font-size: 3rem;
        font-family: 'Anton', sans-serif;
        font-weight: lighter;
        color:#e33e3e;

    }
    h3{
        font-size: 1.3rem;
        font-weight: 500;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        font-weight: 400;
        color: #bbb;
    }

`;

export default GlobalStyle;

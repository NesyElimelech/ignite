import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color:  #fff;
            background-image: linear-gradient(to bottom, #e33e3e , #111111 );
            border-radius: 1rem;
        }
        &::-webkit-scrollbar-track{
            background: transparent;
        }

    }

    body{
        background-color: #262627;
        font-family: 'Montserrat', sans-serif;
        min-width: 100%;
        color: #fff;
    }
    .App {
        padding:0 0 3rem 0;
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
        padding: 1.5rem 0;
    }
    p{
        font-size: 1rem;
        line-height: 2;
        font-weight: 400;
        color: #bbb;
        padding: 1rem 0;
    }
    a{
        text-decoration: none;
        color: #bbb;
        &:visited{
            color: inherit;
        }
    }
    img{
        display: block;
    }

`;

export default GlobalStyle;

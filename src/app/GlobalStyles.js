import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --bg-color: #ffffff;
    --primary-color: #BF0221;
    --secondary-color: #000;
    --text-color: #000;
    --link-color: #000;
    --menu-bg-color:#BF0221;
}

[data-theme="dark"] {
    --bg-color: #050505;
    --primary-color: #BF0221;
    --secondary-color: #fff;
    --text-color: #fff;
    --link-color: #fff;
    --menu-bg-color:#BF0221;
}
body {
    font-weight: 300;
    font-family: 'Outfit', sans-serif;
    height: 100%;
    overflow-x: hidden;
    line-height: 1.6;
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    font-size: -webkit-calc(1rem + .025 * ( (100vw - 576px) / 864));
    font-size: calc(1rem + .025 * ( (100vw - 576px) / 864));
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-color);
    color: var(--text-color);
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
}
@media screen and (max-width: 992px){
body{
    padding-top:60px
}
}
@media screen and (min-width: 992px){
    body{
        padding-top:100px
    }
}
.container {
    max-width: 1150px;
}
    
    
*:focus:not(a){
    box-shadow: none !important;
}
svg{
    fill:var(--link-color);
}
a {
    color:var(--link-color);
}
a:hover {
    color: var(--link-color);
}
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #f2eded;
    --black: #2D3B48;
    --dark-black:#010003;
    --purple: #4E44C0;
    --gray:#C3CFD9;
    --transparent: opacity 0;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}
`
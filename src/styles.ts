import { createGlobalStyle } from 'styled-components'

export const colors = {
  vermelho: '#E66767',
  begeClaro: '#FFF8F2',
  bege: '#FFEBD9',
  branco: '#FFFFFF'
}

export const CssGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.begeClaro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

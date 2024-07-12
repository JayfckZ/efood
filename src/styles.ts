import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  white: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const CssGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.lightBeige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

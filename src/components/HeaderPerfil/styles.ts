import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 64px;
  color: ${colors.vermelho};
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 14px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      width: 256px;
    }

    #carrinho {
      text-align: end;
    }
  }
`

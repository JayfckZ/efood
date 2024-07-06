import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.bege};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Redes = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 8px;

  li {
    list-style: none;
  }
`

export const Paragrafo = styled.p`
  font-size: 10px;
  margin-top: 80px;
  color: ${colors.vermelho};
  text-align: center;
  max-width: 480px;
`

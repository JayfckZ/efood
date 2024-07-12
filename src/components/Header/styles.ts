import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 64px 0 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 136px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${colors.red};
`

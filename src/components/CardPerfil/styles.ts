import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Tag&Button/styles'

export const CardContainer = styled.div`
  padding: 8px;
  background-color: ${colors.vermelho};
  color: ${colors.bege};

  h3 {
    margin: 8px 0;
  }

  p {
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    background-color: ${colors.bege};
    color: ${colors.vermelho};
    display: block;
    margin: 0;
    text-align: center;
  }
`

export const Titulo = styled.h3``

export const Descricao = styled.p``

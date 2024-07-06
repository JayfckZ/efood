import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.branco};
  color: ${colors.vermelho};
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  .infos {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }

  .card--body {
    border-left: 1px solid ${colors.vermelho};
    border-right: 1px solid ${colors.vermelho};
    border-bottom: 1px solid ${colors.vermelho};
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Descricao = styled.p`
  padding: 8px;
  font-size: 14px;
  display: block;
`

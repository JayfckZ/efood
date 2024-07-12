import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  > img {
    width: 100%;
    display: block;
    height: 217px;
    object-fit: cover;
  }

  .infos {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }

  .card--body {
    border-left: 1px solid ${colors.red};
    border-right: 1px solid ${colors.red};
    border-bottom: 1px solid ${colors.red};
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

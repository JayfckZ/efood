import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 32px;
  padding: 24px 0 32px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    content: '';
  }

  .container {
    position: relative;
    z-index: 1;
  }
`
export const Categoria = styled.h2`
  font-weight: 100;
  color: ${colors.branco};
  margin-bottom: 152px;
`

export const Restaurante = styled.h3`
  font-weight: 900;
  color: ${colors.branco};
`

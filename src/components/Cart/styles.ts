import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Tag&Button/styles'
import lixo from '../../assets/images/lixo.png'

export const CartContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${colors.vermelho};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  ${ButtonContainer} {
    width: 100%;
    margin: 8px 0;
    text-align: center;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.bege};
  font-weight: bold;
  margin-top: 40px;
`

export const CartItem = styled.div`
  background-color: ${colors.bege};
  color: ${colors.vermelho};
  display: flex;
  position: relative;
  margin-bottom: 16px;
  padding: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-image: url(${lixo});
    cursor: pointer;
  }
`

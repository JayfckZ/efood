import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Tag&Button/styles'

export const CardContainer = styled.div`
  padding: 8px;
  background-color: ${colors.vermelho};
  color: ${colors.bege};

  > img {
    width: 100%;
    display: block;
    height: 217px;
    object-fit: cover;
  }

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  content: '';
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.vermelho};
  padding: 32px;
  display: flex;
  gap: 24px;
  z-index: 1;
  color: ${colors.bege};
  position: relative;

  .containerCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
  }

  .foto-prato {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
  }

  p {
    margin: 16px 0;
    font-size: 14px;
  }

  ${ButtonContainer} {
    background-color: ${colors.bege};
    color: ${colors.vermelho};
    display: block;
    margin: 0;
    text-align: center;
    justify-self: end;
  }

  @media (width < ${breakpoints.tablet}) {
    flex-direction: column;

    .foto-prato {
      width: 100%;
      height: 192px;
    }
  }
`

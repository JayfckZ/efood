import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from './Button'

export const TagContainer = styled.div`
  background-color: ${colors.vermelho};
  color: ${colors.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${(props) =>
    props.variant == 'primary' ? colors.vermelho : colors.bege};
  color: ${(props) =>
    props.variant == 'primary' ? colors.bege : colors.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 4px;
  cursor: pointer;
  text-decoration: none;
  margin: 8px;
  display: inline-block;
`

import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from './'

export const LoadContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.size ? props.size : 'calc(100vh - 298px)')};
  background-color:  ${(props) =>
    props.size ? colors.beige : colors.lightBeige};
  }
`

import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px 48px;
  padding: 80px 0 120px;
  list-style: none;

  @media (width < ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

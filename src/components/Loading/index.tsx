import { MoonLoader } from 'react-spinners'

import { colors } from '../../styles'
import { LoadContainer } from './styles'

export const Loading = () => (
  <LoadContainer className="container">
    <MoonLoader color={colors.red} />
  </LoadContainer>
)

export default Loading

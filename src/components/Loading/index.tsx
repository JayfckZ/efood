import { MoonLoader } from 'react-spinners'

import { colors } from '../../styles'
import { LoadContainer } from './styles'

export type Props = {
  size?: string
}

export const Loading = ({ size = '' }: Props) => (
  <LoadContainer size={size} className="container">
    <MoonLoader size={size ? size : 60} color={colors.red} />
  </LoadContainer>
)

export default Loading

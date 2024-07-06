import { ButtonContainer } from '../styles'

type Props = {
  children: string
  onClick?: () => void
  to?: string
}
const Button = ({ children, onClick, to }: Props) => (
  <ButtonContainer onClick={onClick} to={to as string}>
    {children}
  </ButtonContainer>
)

export default Button

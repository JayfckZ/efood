import { ButtonContainer } from '../styles'

export type Props = {
  variant?: 'primary' | 'secondary'
  children: string
  onClick?: () => void
  to?: string
}
const Button = ({ variant = 'primary', children, onClick, to }: Props) => (
  <ButtonContainer variant={variant} onClick={onClick} to={to as string}>
    {children}
  </ButtonContainer>
)

export default Button

import { ButtonContainer } from '../styles'

export type Props = {
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  children: string | JSX.Element
  onClick?: () => void
  to?: string
  disabled?: boolean
}
const Button = ({
  variant = 'primary',
  type = 'button',
  children,
  onClick,
  to,
  disabled
}: Props) => (
  <ButtonContainer
    disabled={disabled}
    type={type}
    variant={variant}
    onClick={onClick}
    to={to as string}
  >
    {children}
  </ButtonContainer>
)

export default Button

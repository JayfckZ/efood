import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { HeaderContainer } from './styles'

const HeaderPerfil = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <h2 id="rest">Restaurantes</h2>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <h2 id="carrinho">0 produto(s) no carrinho</h2>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil

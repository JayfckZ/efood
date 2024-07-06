import { Imagem, Titulo } from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="eFood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)

export default Header

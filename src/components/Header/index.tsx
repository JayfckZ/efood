import * as S from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <h1>
        <img src={logo} alt="eFood" />
      </h1>
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </div>
  </S.Imagem>
)

export default Header

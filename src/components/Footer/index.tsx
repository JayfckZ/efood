import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.FooterContainer>
    <Link to="/">
      <img src={logo} alt="efood" />
    </Link>
    <S.Redes>
      <li>
        <img src={instagram} alt="instagram" />
      </li>
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={twitter} alt="facebook" />
      </li>
    </S.Redes>
    <S.Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Paragrafo>
  </S.FooterContainer>
)

export default Footer

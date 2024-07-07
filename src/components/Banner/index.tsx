import banner from '../../assets/images/fundoPerfil.png'
import { BannerContainer, Categoria, Restaurante } from './styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Restaurante>La Dolce Vita Trattoria</Restaurante>
    </div>
  </BannerContainer>
)

export default Banner

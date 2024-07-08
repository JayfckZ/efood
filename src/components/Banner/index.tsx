import banner from '../../assets/images/fundoPerfil.png'
import { BannerContainer, Categoria, Restaurante } from './styles'

type Props = {
  imagem: string
  tipo: string
  titulo: string
}
const Banner = ({ imagem, tipo, titulo }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <Categoria>{tipo}</Categoria>
      <Restaurante>{titulo}</Restaurante>
    </div>
  </BannerContainer>
)

export default Banner

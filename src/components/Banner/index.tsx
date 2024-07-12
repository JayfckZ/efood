import * as S from './styles'

type Props = {
  imagem: string
  tipo: string
  titulo: string
}
const Banner = ({ imagem, tipo, titulo }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <S.Categoria>{tipo}</S.Categoria>
      <S.Restaurante>{titulo}</S.Restaurante>
    </div>
  </S.BannerContainer>
)

export default Banner

import { CardContainer } from './styles'
import Button from '../Tag&Button/Button'

type Props = {
  imagem: string
  nome: string
  descricao: string
  id: number
}

const CardPerfil = ({ imagem, nome, descricao }: Props) => (
  <CardContainer>
    <img src={imagem} />
    <h3>{nome}</h3>
    <p>{descricao}</p>
    <Button>Adicionar ao carrinho</Button>
  </CardContainer>
)

export default CardPerfil

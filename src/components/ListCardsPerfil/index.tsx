import Card from '../../modals/cardPerfil'
import CardPerfil from '../CardPerfil'
import { ListContainer } from './styles'

type Props = {
  lista: Card[]
}

export const ListCardsPerfil = ({ lista }: Props) => (
  <div className="container">
    <ListContainer>
      {lista.map((card) => (
        <CardPerfil
          imagem={card.imagem}
          nome={card.nome}
          descricao={card.descricao}
          id={card.id}
          key={card.id}
        />
      ))}
    </ListContainer>
  </div>
)

export default ListCardsPerfil

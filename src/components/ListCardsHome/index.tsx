import CardHome from '../../components/CardHome'
import Card from '../../modals/card'
import { ListContainer } from './styles'

type Props = {
  lista: Card[]
}

export const ListCardsHome = ({ lista }: Props) => (
  <div className="container">
    <ListContainer>
      {lista.map((card) => (
        <CardHome
          imagem={card.imagem}
          nome={card.nome}
          ava={card.ava}
          descricao={card.descricao}
          infos={card.infos}
          id={card.id}
          key={card.id}
        />
      ))}
    </ListContainer>
  </div>
)

export default ListCardsHome

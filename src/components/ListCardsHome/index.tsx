import CardHome from '../../components/CardHome'
import { Restaurante } from '../../models/restaurante'
import { ListContainer } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

export const ListCardsHome = ({ restaurantes }: Props) => {
  return (
    <div className="container">
      <ListContainer>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <CardHome
              capa={restaurante.capa}
              titulo={restaurante.titulo}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              tipo={restaurante.tipo}
              destacado={restaurante.destacado}
              id={restaurante.id}
            />
          </li>
        ))}
      </ListContainer>
    </div>
  )
}

export default ListCardsHome

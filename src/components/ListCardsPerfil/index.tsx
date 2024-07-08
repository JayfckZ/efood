import { Prato } from '../../models/restaurante'
import CardPerfil from '../CardPerfil'
import { ListContainer } from './styles'

type Props = {
  pratos: Prato[]
}

export const ListCardsPerfil = ({ pratos }: Props) => (
  <>
    <div className="container">
      <ListContainer>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <CardPerfil
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              id={prato.id}
              preco={prato.preco}
              porcao={prato.porcao}
            />
          </li>
        ))}
      </ListContainer>
    </div>
  </>
)

export default ListCardsPerfil

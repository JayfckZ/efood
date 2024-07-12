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
            <CardPerfil prato={prato} />
          </li>
        ))}
      </ListContainer>
    </div>
  </>
)

export default ListCardsPerfil

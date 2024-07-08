import estrela from '../../assets/images/estrela.png'
import { Card, CardHeader, Descricao } from './styles'
import Tag from '../Tag&Button/Tag'
import Button from '../Tag&Button/Button'
import { Restaurante } from '../../models/restaurante'

type Props = Omit<Restaurante, 'cardapio'>

const CardHome = ({
  capa,
  titulo,
  avaliacao,
  destacado,
  descricao,
  tipo,
  id
}: Props) => {
  return (
    <Card>
      <img src={capa} />
      <div className="infos">
        {destacado && <Tag>Destacado da semana</Tag>}
        <Tag>{tipo}</Tag>
      </div>
      <div className="card--body">
        <CardHeader>
          <h3>{titulo}</h3>
          <div>
            <h3>{avaliacao}</h3>
            <img src={estrela} />
          </div>
        </CardHeader>
        <Descricao>{descricao}</Descricao>
        <Button to={`/restaurante/${id}`}>Saiba mais</Button>
      </div>
    </Card>
  )
}

export default CardHome

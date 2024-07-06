import estrela from '../../assets/images/estrela.png'
import { Card, CardHeader, Descricao } from './styles'
import Tag from '../Tag&Button/Tag'
import Button from '../Tag&Button/Button'

type Props = {
  imagem: string
  nome: string
  ava: number
  descricao: string
  infos: string[]
  id: number
}
const CardHome = ({ imagem, nome, ava, descricao, infos }: Props) => (
  <Card>
    <img src={imagem} />
    <div className="infos">
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <div className="card--body">
      <CardHeader>
        <h3>{nome}</h3>
        <div>
          <h3>{ava}</h3>
          <img src={estrela} />
        </div>
      </CardHeader>
      <Descricao>{descricao}</Descricao>
      <Button>Saiba mais</Button>
    </div>
  </Card>
)

export default CardHome

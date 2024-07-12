import Tag from '../Tag&Button/Tag'
import Button from '../Tag&Button/Button'

import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

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
    <S.Card>
      <img src={capa} />
      <div className="infos">
        {destacado && <Tag>Destacado da semana</Tag>}
        <Tag>{tipo}</Tag>
      </div>
      <div className="card--body">
        <S.CardHeader>
          <h3>{titulo}</h3>
          <div>
            <h3>{avaliacao}</h3>
            <img src={estrela} />
          </div>
        </S.CardHeader>
        <S.Descricao>{descricao}</S.Descricao>
        <Button to={`/restaurante/${id}`}>Saiba mais</Button>
      </div>
    </S.Card>
  )
}

export default CardHome

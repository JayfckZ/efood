import { useDispatch, useSelector } from 'react-redux'

import Button from '../Tag&Button/Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import { useGetAdressQuery } from '../../services/cepApi'

import * as S from './styles'

const Card = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const { data } = useGetAdressQuery('25015-440')
  console.log(data)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContent className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <div>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="lixeira"
                type="button"
              />
            </S.CartItem>
          ))}
          <S.Prices>
            <p>Valor total</p>
            <span>{formataPreco(getTotalPrice(items))}</span>
          </S.Prices>
          <Button variant="secondary">Continuar com a entrega</Button>
          <Button onClick={closeCart} variant="secondary">
            Continuar buscando
          </Button>
        </div>
      </S.Sidebar>
    </S.CartContent>
  )
}

export default Card

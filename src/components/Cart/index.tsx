import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Tag&Button/Button'
import { CartContent, Overlay, Sidebar, CartItem, Prices } from './styles'
import { Prato } from '../../models/restaurante'

const Card = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = (items: Prato[]) => {
    return items.reduce((acc, actual) => {
      return (acc += actual.preco)
    }, 0)
  }

  return (
    <CartContent className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.map((item) => (
          <CartItem key={item.id}>
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
          </CartItem>
        ))}
        <Prices>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice(items))}</span>
        </Prices>
        <Button variant="secondary">Continuar com a entrega</Button>
        <Button onClick={closeCart} variant="secondary">
          Continuar buscando
        </Button>
      </Sidebar>
    </CartContent>
  )
}

export default Card

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { HeaderContainer } from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <h2 id="rest">Restaurantes</h2>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <h2 onClick={openCart} id="carrinho">
          {items.length} produto(s) no carrinho
        </h2>
      </div>
    </HeaderContainer>
  )
}

export default HeaderPerfil

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Tag&Button/Button'
import close from '../../assets/images/close.png'

import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

import * as S from './styles'

type Props = {
  prato: Prato
}

const CardPerfil = ({ prato }: Props) => {
  const dispatch = useDispatch()
  const [estaVisivel, setEstaVisivel] = useState(false)

  const addToCart = (prato: Prato) => {
    dispatch(add(prato))
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 188) + '...'
    }
    return descricao
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.CardContainer>
        <img src={prato.foto} />
        <h3>{prato.nome}</h3>
        <p>{getDescription(prato.descricao)}</p>
        <Button onClick={() => setEstaVisivel(true)}>Mais informações</Button>
      </S.CardContainer>
      <S.Modal className={estaVisivel ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={prato.foto} className="foto-prato" />
          <img
            src={close}
            className="close"
            onClick={() => setEstaVisivel(false)}
          />
          <div className="containerCard">
            <div>
              <h4>{prato.nome}</h4>
              <p>
                {prato.descricao}
                <br />
                <br />
                <br />
                {prato.porcao !== '1 pessoa' ? (
                  <>Serve de </>
                ) : (
                  <>Serve </>
                )}{' '}
                {prato.porcao}
              </p>
            </div>
            <Button
              onClick={() => {
                addToCart(prato)
                setEstaVisivel(false)
                openCart()
              }}
              variant="secondary"
            >
              {'Adicionar ao carrinho - ' + formataPreco(prato.preco)}
            </Button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setEstaVisivel(false)}></div>
      </S.Modal>
    </>
  )
}

export default CardPerfil

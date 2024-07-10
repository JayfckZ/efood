import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { CardContainer, Modal, ModalContent } from './styles'
import Button from '../Tag&Button/Button'
import { Prato } from '../../models/restaurante'
import close from '../../assets/images/close.png'

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

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <CardContainer>
        <img src={prato.foto} />
        <h3>{prato.nome}</h3>
        <p>{getDescription(prato.descricao)}</p>
        <Button onClick={() => setEstaVisivel(true)}>Mais informações</Button>
      </CardContainer>
      <Modal className={estaVisivel ? 'visible' : ''}>
        <ModalContent className="container">
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
        </ModalContent>
        <div className="overlay" onClick={() => setEstaVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfil

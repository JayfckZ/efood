import { useState } from 'react'
import { CardContainer, Modal, ModalContent } from './styles'
import Button from '../Tag&Button/Button'
import { Prato } from '../../models/restaurante'
import close from '../../assets/images/close.png'

const CardPerfil = ({ foto, nome, descricao, id, porcao, preco }: Prato) => {
  const [estaVisivel, setEstaVisivel] = useState(false)

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
  return (
    <>
      <CardContainer>
        <img src={foto} />
        <h3>{nome}</h3>
        <p>{getDescription(descricao)}</p>
        <Button onClick={() => setEstaVisivel(true)}>Mais informações</Button>
      </CardContainer>
      <Modal className={estaVisivel ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={foto} className="foto-prato" />
          <img
            src={close}
            className="close"
            onClick={() => setEstaVisivel(false)}
          />
          <div className="containerCard">
            <div>
              <h4>{nome}</h4>
              <p>
                {descricao}
                <br />
                <br />
                <br />
                {porcao !== '1 pessoa' ? <>Serve de </> : <>Serve </>} {porcao}
              </p>
            </div>
            <Button>
              {'Clique para adicionar ao carrinho - ' + formataPreco(preco)}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setEstaVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfil

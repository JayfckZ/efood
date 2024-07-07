class Card {
  imagem: string
  nome: string
  descricao: string
  id: number

  constructor(imagem: string, nome: string, descricao: string, id: number) {
    this.imagem = imagem
    this.nome = nome
    this.descricao = descricao
    this.id = id
  }
}

export default Card

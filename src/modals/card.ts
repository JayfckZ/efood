class Card {
  imagem: string
  nome: string
  ava: number
  descricao: string
  infos: string[]
  id: number

  constructor(
    imagem: string,
    nome: string,
    ava: number,
    descricao: string,
    infos: string[],
    id: number
  ) {
    this.imagem = imagem
    this.nome = nome
    this.ava = ava
    this.descricao = descricao
    this.infos = infos
    this.id = id
  }
}

export default Card

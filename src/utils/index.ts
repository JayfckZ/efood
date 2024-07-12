export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Prato[]) => {
  return items.reduce((acc, actual) => {
    return (acc += actual.preco)
  }, 0)
}

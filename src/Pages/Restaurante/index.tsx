import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListCardsPerfil from '../../components/ListCardsPerfil'
import Banner from '../../components/Banner'
import { Restaurante } from '../../models/restaurante'

type Props = {
  id: number
}
const PaginaRestaurante = () => {
  const [restaurante, SetRestaurante] = useState<Restaurante>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => SetRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderPerfil />
      <Banner
        imagem={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <ListCardsPerfil pratos={restaurante.cardapio} />
    </>
  )
}

export default PaginaRestaurante

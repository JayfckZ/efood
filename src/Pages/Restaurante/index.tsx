import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListCardsPerfil from '../../components/ListCardsPerfil'
import Banner from '../../components/Banner'
import Loading from '../../components/Loading'
import { Restaurante } from '../../models/restaurante'
import { useGetRestauranteQuery } from '../../services/api'

type Props = {
  id: number
}
const PaginaRestaurante = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return <Loading />
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

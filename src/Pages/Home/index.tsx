import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ListCardsHome from '../../components/ListCardsHome'
import { Restaurante } from '../../models/restaurante'

const Home = () => {
  const [restaurantes, SetRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => SetRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ListCardsHome restaurantes={restaurantes} />
    </>
  )
}

export default Home

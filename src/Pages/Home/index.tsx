import Header from '../../components/Header'
import ListCardsHome from '../../components/ListCardsHome'
import Loading from '../../components/Loading'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <ListCardsHome restaurantes={restaurantes} />
    </>
  )
}

export default Home

import Header from '../../components/Header'
import ListCardsHome from '../../components/ListCardsHome'
import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'

const card = [
  {
    imagem: sushi,
    nome: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    ava: 4.9,
    id: 1
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    ava: 4.6,
    id: 2
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    ava: 4.6,
    id: 3
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    ava: 4.6,
    id: 4
  }
]

const Home = () => (
  <>
    <Header />
    <ListCardsHome lista={card} />
  </>
)

export default Home

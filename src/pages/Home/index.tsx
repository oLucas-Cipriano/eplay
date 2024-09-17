import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 200,00'],
    image: starWars
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['5%', 'R$ 150,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['17/09'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/09'],
    image: resident
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/09'],
    image: zelda
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, odio atque. Consectetur dolorum, possimus, nobis provident ratione ex perferendis expedita debitis a perspiciatis quibusdam excepturi molestias omnis molestiae deleniti dolor.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/11'],
    image: starWars
  }
]
const Home = () => (
  <>
    <Banner></Banner>
    <ProductsList
      games={promocoes}
      title="Promoções"
      background="gray"
    ></ProductsList>
    <ProductsList
      games={emBreve}
      title="Em breve"
      background="black"
    ></ProductsList>
  </>
)

export default Home

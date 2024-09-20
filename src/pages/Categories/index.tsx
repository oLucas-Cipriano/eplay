import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        ></ProductsList>
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        ></ProductsList>
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        ></ProductsList>
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        ></ProductsList>
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        ></ProductsList>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories

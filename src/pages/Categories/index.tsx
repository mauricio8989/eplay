import { ProductsList } from '../../Components/ProductsList';

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
} from '../../services/api';

export function Categories() {
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: sportGames } = useGetSportGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();
  const { data: fightGames } = useGetFightGamesQuery();
  const { data: rpgGames } = useGetRpgGamesQuery();

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          id="action"
          title="Ação"
          background="black"
          games={actionGames}
        />
        <ProductsList
          id="sports"
          title="Esportes"
          background="gray"
          games={sportGames}
        />
        <ProductsList
          id="simulation"
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductsList
          id="fight"
          title="Luta"
          background="gray"
          games={fightGames}
        />
        <ProductsList
          id="rpg"
          title="RPG"
          background="black"
          games={rpgGames}
        />
      </>
    );
  }
  return <h4>Carregando...</h4>;
}

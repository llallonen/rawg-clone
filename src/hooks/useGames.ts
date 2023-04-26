import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse, Game } from "../Interfaces";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../Interfaces";
import APIClient from "../services/apiClient";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (last, allPages) => {
      return last ? allPages.length + 1 : undefined;
    },
  });
};

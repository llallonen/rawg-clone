import useData, { Genre } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export const useGames = (currGenre: Genre | null) => useData<Game>('/games', {params: {genres: currGenre?.id}}, [currGenre?.id]);

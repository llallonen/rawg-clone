import { useQuery } from "@tanstack/react-query";
import { Genre } from "../Interfaces";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;

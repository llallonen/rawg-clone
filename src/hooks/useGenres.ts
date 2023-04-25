import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse, Genre } from "../Interfaces";

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: () =>
    apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
}); 

export default useGenres;
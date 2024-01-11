//import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const data = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

  return data;
};

export default useGenres;

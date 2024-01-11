//import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const data = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/list/parents")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });

  return data;
};

//useData<Platform>("/platforms/lists/parents");

export default usePlatforms;

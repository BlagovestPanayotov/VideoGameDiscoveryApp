import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const data = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms("24h"),
  });

  return data;
};

export default usePlatforms;

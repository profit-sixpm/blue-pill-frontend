import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHome } from "../api/home.api";
import { homeQueries } from "./home.queries";

export const useDeleteHome = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteHome,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeQueries.all() });
    },
  });
};

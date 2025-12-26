import { publicApi } from "@/shared/lib";
import type { HomeListResponseDTO, HomeResponseDTO } from "../model";
import { homeApiEndPoint } from "../config";

export const getHomeList = async () => {
  const response = await publicApi.get<HomeListResponseDTO>(
    homeApiEndPoint.getHome()
  );
  return response.data.data;
};

export const getHomeDetail = async ({ id }: { id: string }) => {
  const response = await publicApi.get<HomeResponseDTO>(
    homeApiEndPoint.getHomeDetail({ id })
  );
  return response.data.data;
};

export const deleteHome = async ({ id }: { id: string }) => {
  const response = await publicApi.get(homeApiEndPoint.deleteHome({ id }));
  return response.data;
};

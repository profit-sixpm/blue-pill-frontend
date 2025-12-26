import type { ResponseDTO } from "@/shared/type";

export interface Home {
  id: string;
  email: string;
  name: string;
}

export type HomeResponseDTO = ResponseDTO<Home>;
export type HomeListResponseDTO = ResponseDTO<Home[]>;

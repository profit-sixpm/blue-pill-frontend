import { env } from "../config";

export const prependApiUrl = (path: string) => {
  return `${env.apiUrl}${path}`;
};

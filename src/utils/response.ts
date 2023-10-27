import { respApi } from "../types";

export function responseApi(message: string, data: any, status: boolean = true, error?: any): respApi {
  const resp: respApi = {
    status,
    message,
    data
  }

  if (error) resp.error = error;

  return resp;
}
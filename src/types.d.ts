export type biological_sex = "Masculino" | "Femenino";

export interface respApi {
  status: boolean;
  message: string;
  data: any;
  error?: any;
}


export interface SedeEntry {
  code: string;
  nombre: string;
  direccion: string;
  id_hospital: number;
}
import { SedeEntry } from "../types";


// Validación para string
const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String;
}

// Validación de fecha
const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date));
}

// Validación de number
const isNumber = (number: any): boolean => {
  return typeof number === 'number' || number instanceof Number;
}

// Validación de parseo de fecha
const pasrseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error(`Invalid date: ${dateFromRequest}`);
  }
  return dateFromRequest;
}

// Validación de parseo de string
function parseString(stringRequest: any): string {
  if (!stringRequest || !isString(stringRequest)) {
    throw new Error(`Invalid name: ${stringRequest}`);
  }
  return stringRequest;
}

function parseNumber(valueRequest: any): number {
  if (!valueRequest || !isNumber(valueRequest)) {
    throw new Error(`Invalid id_hospital: ${valueRequest}`);
  }
  return valueRequest;
}

// Validación para creación de sede.
export const toNewSede = (object: any): SedeEntry => {

  const newSede: SedeEntry = {
    code: parseString(object.code),
    nombre: parseString(object.nombre),
    direccion: parseString(object.direccion),
    id_hospital: parseNumber(object.id_hospital),
  }

  return newSede;
};
import { Response, Request } from 'express';
import { connectMysql } from "../database/dbmysql";
import { responseApi } from "../utils/response";
import { toNewSede } from "../utils/validate";

export const addSede = async (req: Request, res: Response) => {
  const connection =  await connectMysql();
  if (connection) {
    try {
      // Validar datos de entrada
      const {code, nombre, direccion, id_hospital} = toNewSede(req.body);

      const query = `INSERT INTO tb_sedes (code, nombre, direccion, id_hospital) VALUES("${code}", "${nombre}", "${direccion}", "${id_hospital}")`;

      console.log("Info:: ", query);
      const resp = await connection.query(query);
      res.status(200).json(responseApi('Creación de sede exitosa', req.body));

    } catch (error) {
      // @ts-ignore
      res.status(500).json(responseApi('Error en gestión de solicitud', null, false, error.message));
      console.error('Error server: ', error);
    }
    await connection.end();
  }
};
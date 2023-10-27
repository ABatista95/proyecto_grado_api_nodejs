import { Request, Response } from 'express';
import { connectMysql } from "../database/dbmysql";
import { responseApi } from "../utils/response";


export const createPaciente = async (req: Request, res: Response) => {
  const connection =  await connectMysql();
  if (connection) {
    try {
      const resp = await connection.query('SELECT * FROM tb_paciente');
      res.status(200).json(responseApi('Creación de paciente exitosa', resp[0]));

    } catch (error) {
      res.status(500).json(responseApi('Error en gestión de solicitud', null, false, error));
      console.error('Error server:: ', error);
    }
    await connection.end();
  }
};

export const getPacientes = (req: Request, res: Response) => {
  res.send('Obteniendo todos los pacientes');
};

export const getPacienteById = (req: Request, res: Response) => {
  console.log(req.params.id);

  res.json({
    status: true,
    message: 'Obteniendo detalles del paciente',
    data: {
      id: req.params.id,
      name: "Ahmansavthor"
    }
  });
};
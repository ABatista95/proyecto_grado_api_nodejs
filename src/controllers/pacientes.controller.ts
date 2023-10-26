import { Request, Response } from 'express';
import { connectMysql } from "../database/dbmysql";


export const createPaciente = async (req: Request, res: Response) => {
  const connection =  await connectMysql();
  if (connection) {
    try {
      const resp = await connection.query('SELECT * FROM tb_paciente');
      res.status(200).json({
        status: true,
        message: 'Creación de paciente exitosa',
        data: resp[0]
      });

    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Creación de paciente exitosa',
        data: null,
        error: error
      });
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
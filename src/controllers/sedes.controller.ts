import { Response, Request } from 'express';

export const createSede = (req: Request, res: Response) => {


  res.json({
    status: true,
    message: 'Creación de sede exitosa',
    data: {
      id: req.params.id
    }
  });
};
import Express, { Application } from "express";
import cors from "cors";

import { PORT } from "../config";

// Rutas
import routerPacientes from "../routes/pacientes.route";
import routerSedes from "../routes/sede.route";

class Server {
  private app: Application;
  private readonly port: string;

  constructor() {
        this.app = Express();
        this.port = PORT;

        this.middleware();
        this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  private middleware() {
    this.app.use(Express.json()); // Parseo del body de las request
    this.app.use(cors()); // Para validaciones de solicitudes externas.
    this.app.use(Express.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.use("/api/v1/paciente", routerPacientes);
    this.app.use("/api/v1/sede", routerSedes);
  }

}

export default Server;
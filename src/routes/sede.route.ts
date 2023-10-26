import { Router } from "express";
import router from "./pacientes.route";

const roouter = Router();

router.get("/", (req: any, res: any) => {
  res.send("Obteniendo todas las sedes");
});

export default router;
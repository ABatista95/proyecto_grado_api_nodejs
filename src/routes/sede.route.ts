import { Router } from "express";

import { addSede } from "../controllers/sedes.controller";

const router = Router();

router.post("/create", addSede);

export default router;
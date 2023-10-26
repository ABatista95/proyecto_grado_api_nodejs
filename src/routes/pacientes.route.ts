import { Router } from "express";

import { createPaciente, getPacienteById, getPacientes } from "../controllers/pacientes.controller";

const router = Router();

router.post("/create", createPaciente);
router.get("/list", getPacientes);
router.get("/:id", getPacienteById);

export default router;
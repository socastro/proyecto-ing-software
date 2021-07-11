import { Router } from "express";
import { insertMaquina, deleteMaquina, getMaquinas, getMaquina } from '../controller/maquinaController'
const router = Router();

router.get("/maquinas", getMaquinas);

router.get("/maquina/:name", getMaquina);

router.post("/maquina", insertMaquina);

router.delete("/maquina/:id", deleteMaquina);

export default router;
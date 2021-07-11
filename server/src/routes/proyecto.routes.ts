import { Router } from "express";
import { insertProyectos, deleteProyectos, getProyectos, getProyecto } from '../controller/proyectoController'
const router = Router();

router.get("/proyectos", getProyectos);

router.get("/proyectos/:name", getProyecto);

router.post("/proyectos", insertProyectos);

router.delete("/proyectos/:id", deleteProyectos);

export default router;
import {Request, Response} from "express";
import { insertProyectoRepository, deleteProyectoRepository, getProyectosRepository, getProyectoRepository } from '../repository/proyectosRepository';

export const insertProyectos = (req: Request, res: Response) => {
    return insertProyectoRepository(req, res);
}

export const deleteProyectos = (req: Request, res: Response) => {
    return deleteProyectoRepository(req, res);
}

export const getProyectos = (req: Request, res: Response) => {
    return getProyectosRepository(req, res);
}

export const getProyecto = (req: Request, res: Response) => {
    return getProyectoRepository(req, res);
}

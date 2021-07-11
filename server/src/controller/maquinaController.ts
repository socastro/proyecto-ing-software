import {Request, Response} from "express";
import { insertMaquinaRepository, deleteMaquinaRepository, getMaquinasRepository, getMaquinaRepository } from '../repository/maquinaRepository';

export const insertMaquina = (req: Request, res: Response) => {
    return insertMaquinaRepository(req, res);
}

export const deleteMaquina = (req: Request, res: Response) => {
    return deleteMaquinaRepository(req, res);
}

export const getMaquinas = (req: Request, res: Response) => {
    return getMaquinasRepository(req, res);
}

export const getMaquina = (req: Request, res: Response) => {
    return getMaquinaRepository(req, res);
}

import {Request, Response} from "express";
import { insertUserRepository, deleteUserRepository, getUsersRepository, getUserRepository } from '../repository/userRepository';

export const insertUser = (req: Request, res: Response) => {
    return insertUserRepository(req, res);
}

export const deleteUser = (req: Request, res: Response) => {
    return deleteUserRepository(req, res);
}

export const getUsers = (req: Request, res: Response) => {
    return getUsersRepository(req, res);
}

export const getUser = (req: Request, res: Response) => {
    return getUserRepository(req, res);
}

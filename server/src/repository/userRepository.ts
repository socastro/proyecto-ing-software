import "reflect-metadata";
import {Request, Response} from "express";
import { User } from '../model/User';
import { getRepository } from "typeorm";


//Devuelve todos los usuarios dentro de la BD
export const getUsersRepository = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users)
}

//Devuelve un usuario según el mail ingresada como parámetro
export const getUserRepository = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.mail);
    if(!user){
        return res.json({
            succesfull: false,
            message: "Usuario no encontrado"
        })
    }
    return res.json({
        succesfull: true,
        user
    })
}

//Inserta un usuario en la BD
export const insertUserRepository = async (req: Request, res: Response): Promise<Response> => {
    if(
        !req.body.name ||
        /*!req.body.maquinas||*/
        !req.body.carrera||
        !req.body.actividad|| 
        !req.body.mail || 
        !req.body.genero ||
        !req.body.campus || 
        !req.body.ingreso
    ){
        return res.json({
            status: 'NONK',
            message: 'Error al crear usuario, faltan parametros'
        })
    }
    req.body.maquinas = "";
    const user = await getRepository(User).create(req.body);
    const result = await getRepository(User).save(user);
    return res.json({
        status: 'OK',
        message: 'Usuario creado correctamente',
        result
    }); 
}


//Elimia un usuario de la BD segun su id
export const deleteUserRepository = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id)
    if (!user) {
        return res.json({
            code: 400,
            status: "NOK",
            message: 'Usuario no encontrado'
        })
    }

    await getRepository(User).delete(user)

    return res.json({
        code: 200,
        message: 'Usuario eliminado correctamente',
        user  
    })

}

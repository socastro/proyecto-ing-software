import "reflect-metadata";
import {Request, Response} from "express";
import { Maquina } from '../model/Maquina';
import { getRepository } from "typeorm";


//Devuelve todos las maquinas dentro de la BD
export const getMaquinasRepository = async (req: Request, res: Response): Promise<Response> => {
    const maquinas = await getRepository(Maquina).find();
    return res.json(maquinas)
}

//Devuelve una maquina según el nombre ingresada como parámetro
export const getMaquinaRepository = async (req: Request, res: Response): Promise<Response> => {
    const maquina = await getRepository(Maquina).findOne(req.params.name);
    if(!maquina){
        return res.json({
            succesfull: false,
            message: "Maquina no encontrada"
        })
    }
    return res.json({
        succesfull: true,
        maquina
    })
}

//Inserta una maquina en la BD
export const insertMaquinaRepository = async (req: Request, res: Response): Promise<Response> => {
    if(
        !req.body.name ||
        !req.body.tipo ||
        !req.body.estado
    ){
        return res.json({
            status: 'NONK',
            message: 'Error al agregar maquina, faltan parametros'
        })
    }
    const maquina = await getRepository(Maquina).create(req.body);
    const result = await getRepository(Maquina).save(maquina);
    return res.json({
        status: 'OK',
        message: 'Maquina agregada correctamente',
        result
    }); 
}


//Elimina una maquina de la BD segun su nombre
export const deleteMaquinaRepository = async (req: Request, res: Response): Promise<Response> => {
    const maquina = await getRepository(Maquina).findOne(req.params.name)
    if (!maquina) {
        return res.json({
            code: 400,
            status: "NOK",
            message: 'Maquina no encontrada'
        })
    }

    await getRepository(Maquina).delete(maquina)

    return res.json({
        code: 200,
        message: 'Maquina eliminada correctamente',
        maquina  
    })

}
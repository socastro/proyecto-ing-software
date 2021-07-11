import "reflect-metadata";
import {Request, Response} from "express";
import { Proyecto } from '../model/Proyecto';
import { getRepository } from "typeorm";


//Devuelve todos los proyectos dentro de la BD
export const getProyectosRepository = async (req: Request, res: Response): Promise<Response> => {
    const proyectos = await getRepository(Proyecto).find();
    return res.json(proyectos)
}

//Devuelve un proyecto según la id ingresada como parámetro
export const getProyectoRepository = async (req: Request, res: Response): Promise<Response> => {
    const proyectos = await getRepository(Proyecto).findOne(req.params.name);
    if(!proyectos){
        return res.json({
            succesfull: false,
            message: "Proyecto no encontrado"
        })
    }
    return res.json({
        succesfull: true,
        proyectos
    })
}

//Inserta un proyecto en la BD
export const insertProyectoRepository = async (req: Request, res: Response): Promise<Response> => {
    if(
        !req.body.name ||
        !req.body.leader_name ||
        !req.body.email ||
        !req.body.resumen_ejecutivo || 
        !req.body.integrantes || 
        !req.body.tipo_proyecto
    ){
        return res.json({
            status: 'NONK',
            message: 'Error al crear proyecto, faltan parametros'
        })
    }
    const proyecto = await getRepository(Proyecto).create(req.body);
    const result = await getRepository(Proyecto).save(proyecto);
    return res.json({
        status: 'OK',
        message: 'Proyecto creado correctamente',
        result
    }); 
}


//Elimia un proyecto de la BD segun su id
export const deleteProyectoRepository = async (req: Request, res: Response): Promise<Response> => {
    const proyecto = await getRepository(Proyecto).findOne(req.params.id)
    if (!proyecto) {
        return res.json({
            code: 400,
            status: "NOK",
            message: 'Proyecto no encontrado'
        })
    }

    await getRepository(Proyecto).delete(proyecto)

    return res.json({
        code: 200,
        message: 'Proyecto eliminado correctamente',
        proyecto  
    })

}

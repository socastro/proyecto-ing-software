import express, { Express } from 'express'
import bodyParser from 'body-parser'
import {createConnection} from 'typeorm'
import proyectoRoutes from './routes/proyecto.routes'
import maquinaRoutes from './routes/maquina.routes'
import userRoutes from './routes/user.routes'

var cors = require('cors')

const server: Express = express()
server.use(cors())
server.use(express.json())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

//Conexión MySQL
createConnection().then(
    () => console.log('Conexión creada')
).catch(
    error => console.log('Error en la conexión', error)
)

//Rutas
server.use(proyectoRoutes, maquinaRoutes, userRoutes)

server.listen(3001, () =>{
    console.log("running on port 3001");
});
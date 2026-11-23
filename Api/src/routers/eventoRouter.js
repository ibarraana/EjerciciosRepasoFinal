import { Router } from "express"

import { 
    obtenerEventos, 
    obtenerEventoPorId, 
    crearEvento, 
    actualizarEvento, 
    eliminarEvento 
} from "../controllers/eventoController.js" 

export const EventoRouter = Router()

EventoRouter.get('/', obtenerEventos)
EventoRouter.get('/:id', obtenerEventoPorId)
EventoRouter.post('/', crearEvento)
EventoRouter.put('/:id', actualizarEvento)
EventoRouter.delete('/:id', eliminarEvento)
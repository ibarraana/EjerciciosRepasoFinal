import { Router } from "express"

import { 
    obtenerEventos, 
    obtenerEventoPorId
} from "../controllers/eventoController.js" 

export const EventoRouter = Router()

EventoRouter.get('/', obtenerEventos)
EventoRouter.get('/:id', obtenerEventoPorId)
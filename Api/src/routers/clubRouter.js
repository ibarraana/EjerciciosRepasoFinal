import { Router } from "express"

import { 
    obtenerClubs, 
    obtenerClubPorId, 
    crearClub, 
    actualizarClub, 
    eliminarClub 
} from "../controllers/clubController.js" 

export const ClubRouter = Router()

ClubRouter.get('/', obtenerClubs)
ClubRouter.get('/:id', obtenerClubPorId)
ClubRouter.post('/', crearClub)
ClubRouter.put('/:id', actualizarClub)
ClubRouter.delete('/:id', eliminarClub)
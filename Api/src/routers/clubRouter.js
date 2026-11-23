import { Router } from "express"

import { 
    obtenerClubs, 
    obtenerClubPorId
} from "../controllers/clubController.js" 

export const ClubRouter = Router()

ClubRouter.get('/', obtenerClubs)
ClubRouter.get('/:id', obtenerClubPorId)
import { Router } from "express"

import { ClubRouter } from "./clubRouter.js"
import { EventoRouter } from "./eventoRouter.js"

const ruteo = Router()

ruteo.use('/clubes', ClubRouter)
ruteo.use('/eventos', EventoRouter)

export default ruteo
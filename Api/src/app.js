import express from "express"
import cors from "cors"

import ruteo from "./routers/index.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", ruteo)

app.get("/", function (req, res) {
    return res.json({
        mensaje: "API e-Commerce funcionando correctamente"
    })
})

export default app;
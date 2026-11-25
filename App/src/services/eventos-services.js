import api from "index.js"

export async function extraerEventos() {
    try {
        const response = await api.get("/eventos")
        return response.data
    }
    catch(error) {
        console.log("Error al extraer los eventos " + error)
        throw error
    }
}

export async function extraerEventoId(id) {
    try {
        const response = await api.get("/eventos/:" + id)
        return response.data
    }
    catch(error) {
        console.log("Error al extraer el evento " + error)
        throw error
    } 
}
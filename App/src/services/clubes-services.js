import api from "index.js"

export async function extraerClubes() {
    try {
        const response = await api.get("/clubes")
        return response.data
    }
    catch(error) {
        console.log("Error al extraer los clubes " + error)
        throw error
    }
}

export async function extraerClubId(id) {
    try {
        const response = await api.get("/clubes/:" + id)
        return response.data
    }
    catch(error) {
        console.log("Error al extraer el club " + error)
        throw error
    } 
}
import { Evento } from '../models/index.js'

export const obtenerEventos = async (req, res) => {
    try { 
      res.json(await Evento.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerEventoPorId = async (req, res) => {
    try { 
        const evento = await Evento.findByPk(req.params.id); 
        if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
        res.json(evento); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

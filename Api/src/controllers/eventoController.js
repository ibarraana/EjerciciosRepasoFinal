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
        const producto = await Evento.findByPk(req.params.id); 
        if (!producto) return res.status(404).json({ error: 'Evento no encontrado' });
        res.json(producto); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearEvento = async (req, res) => {
    try { 
      res.status(201).json(await Evento.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarEvento = async (req, res) => {
    try { 
        const [filas] = await Evento.update(req.body, { where: { id_evento: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Evento no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarEvento = async (req, res) => {
    try { 
        const filas = await Evento.destroy({ where: { id_evento: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Evento no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
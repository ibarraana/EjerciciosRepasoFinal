import { Club } from '../models/index.js'

export const obtenerClubs = async (req, res) => {
    try { 
      res.json(await Club.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerClubPorId = async (req, res) => {
    try { 
        const producto = await Club.findByPk(req.params.id); 
        if (!producto) return res.status(404).json({ error: 'Club no encontrado' });
        res.json(producto); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearClub = async (req, res) => {
    try { 
      res.status(201).json(await Club.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarClub = async (req, res) => {
    try { 
        const [filas] = await Club.update(req.body, { where: { id_club: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Club no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarClub = async (req, res) => {
    try { 
        const filas = await Club.destroy({ where: { id_club: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Club no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
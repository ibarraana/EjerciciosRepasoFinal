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
        const club = await Club.findByPk(req.params.id); 
        if (!club) return res.status(404).json({ error: 'Club no encontrado' });
        res.json(club); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

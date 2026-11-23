import { Evento } from '../models/index.js'

export default {
    up: async() => {
        console.log('Insertando los eventos en la base de datos...')

        await Evento.findOrCreate({
            where: { titulo: 'Torneo de Fútbol' },
            defaults: {
                encargadoOrganizacion: 'Juan Pérez',
                fechaCelebracion: '2023-10-15',
                costoInscripcion: 1000.00,
                lugarSede: 'Estadio Monumental',
                urlImagenBanner: '/banner.png',
                reglamentoOpcional: 'Reglamento del torneo de fútbol.'
            }
        })

        await Evento.findOrCreate({
            where: { titulo: 'Torneo de Basquet' },
            defaults: {
                encargadoOrganizacion: 'Juan Molina',
                fechaCelebracion: '2027-10-15',
                costoInscripcion: 2500.00,
                lugarSede: 'Estadio Unico de la plata',
                urlImagenBanner: '/banner2.png',
                reglamentoOpcional: 'Reglamento del torneo de basquet.'
            }
        })

    },

    down: async() => {
        console.log('Eliminando el evento de la base de datos...')
        await Evento.destroy({
            where: { }, truncate: true
        })

    }
}
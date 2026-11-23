import { Club } from '../models/index.js'

export default {
    up: async() => {
        console.log('Insertando los clubes en la base de datos...')

        await Club.findOrCreate({
            where: { nombre: 'Club Atlético River Plate' },
            defaults: {
                direccion: 'Av. Figueroa Alcorta 7597, CABA',
                telefonoContacto: '011 4789-1234',
                capacidadSocios: 10000,
                disciplinaPrincipal: 'Fútbol',
                urlImagenLogo: '/logo.png',
                historiaResumida: 'El Club Atlético River Plate es uno de los clubes de fútbol más importantes de Argentina, con una rica historia y numerosos títulos nacionales e internacionales.'
            }
        })

        await Club.findOrCreate({
            where: { nombre: 'Club Atlético Boca Juniors' },
            defaults: {
                direccion: 'Calle Brandsen 805, CABA',
                telefonoContacto: '011 4300-5678',
                capacidadSocios: 70000,
                disciplinaPrincipal: 'Fútbol',
                urlImagenLogo: '/logo2.png',
                historiaResumida: 'El Club Atlético Boca Juniors es uno de los clubes de fútbol más importantes de Argentina, con una rica historia y numerosos títulos nacionales e internacionales.'
            }
        })

    },

    down: async() => {
        console.log('Eliminando el club de la base de datos...')
        await Club.destroy({
            where: { }, truncate: true
        })

    }
}
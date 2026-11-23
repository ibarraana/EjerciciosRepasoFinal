import { sequelize, testConnection } from '../config/database.js'
import eventoSeeders from './eventoSeeder.js'
import clubSeeder from './clubSeeder.js'

const runSeeds = async () => {
  try {
    console.log('--- Iniciando Proceso de Seeding Global ---')
    
    await testConnection()
    
    await sequelize.sync({ force: false })
    
    await eventoSeeders.up()
    await clubSeeder.up()

    console.log('✅ Todos los seeders se ejecutaron con éxito.')
    process.exit(0);
  } catch (error) {
    console.error('💥 Error durante el proceso de seeding:', error)
    process.exit(1)
  }
}

runSeeds()
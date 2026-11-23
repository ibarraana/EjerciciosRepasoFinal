/*
id
titulo
encargadoOrganizacion
fechaCelebracion
costoInscripcion
lugarSede
urlImagenBanner
reglamentoOpcional
*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Evento = sequelize.define("Evento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    encargadoOrganizacion: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    fechaCelebracion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    costoInscripcion: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    lugarSede: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    urlImagenBanner: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    reglamentoOpcional: {
        type: DataTypes.STRING(250),
        allowNull: true
    }}, {
        tableName: "eventos",
        timestamps: false
    }
)

export default Evento
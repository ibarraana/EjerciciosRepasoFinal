/*
id
nombre
direccion
telefonoContacto
capacidadSocios
disciplinaPrincipal
urlImagenLogo
historiaResumida
 */

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Club = sequelize.define("Club", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefonoContacto: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    capacidadSocios: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disciplinaPrincipal: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    urlImagenLogo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    historiaResumida: {
        type: DataTypes.STRING(100),
        allowNull: false
    }}, {
        tableName: "clubes",
        timestamps: false
    }
)

export default Club
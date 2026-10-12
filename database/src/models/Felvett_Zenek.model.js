import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Felvett_Zene = sequel.define("Felvett_Zene", {
  cim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  banda_nev: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mufaj_nev: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album_nev: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zene_nev: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

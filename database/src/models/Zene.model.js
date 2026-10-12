import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Zene = sequel.define(
  "Zene",
  {
    cim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mufajId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    bandaId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    albumId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  {
    tableName: "Zene",
  },
);

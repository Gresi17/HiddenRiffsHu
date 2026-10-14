import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Album = sequel.define(
  "Album",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zenek_szama: DataTypes.INTEGER,
    bandaId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    mufajId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Album",
  },
);

import { sequel } from "../utils/database";
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
      unique: true,
    },
  },
  {
    tableName: "Album",
  },
);

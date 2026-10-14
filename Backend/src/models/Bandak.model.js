import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Bandak = sequel.define(
  "Bandák",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mufajId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Bandák",
  },
);

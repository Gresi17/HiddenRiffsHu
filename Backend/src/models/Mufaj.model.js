import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Mufaj = sequel.define(
  "Műfaj",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Műfaj",
    timeStamps: false,
  },
);

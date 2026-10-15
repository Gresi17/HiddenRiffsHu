import { sequel } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const User = sequel.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: DataTypes.STRING,
  },
  {
    tableName: "Felhasználó",
    timeStamps: false,
  },
);

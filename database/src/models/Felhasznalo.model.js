import { sequel } from "../utils/database";
import { DataTypes } from "sequelize";

export const User = sequel.define(
  "Felhasználó",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
);

import express from "express";
import "dotenv/config";

import { sequel } from "./utils/database.js";
import { User } from "./models/Felhasznalo.model.js";
import { Mufaj } from "./models/mufaj.model.js";
import { Bandak } from "./models/bandak.model.js";
import { Zene } from "./models/Zene.model.js";
import { Album } from "./models/Album.model.js";
import { Felvett_Zene } from "./models/Felvett_Zenek.model.js";

Zene.belongsTo(Album, { foreignKey: "albumId" });
Zene.belongsTo(Bandak, { foreignKey: "bandaId" });
Zene.belongsTo(Mufaj, { foreignKey: "mufajId" });
Album.belongsTo(Bandak, { foreignKey: "bandaId" });
Album.belongsTo(Mufaj, { foreignKey: "mufajId" });
Bandak.belongsTo(Mufaj, { foreignKey: "mufajId" });
User.belongsToMany(Zene, { through: Felvett_Zene });
Zene.belongsToMany(User, { through: Felvett_Zene });
Felvett_Zene.belongsTo(Album, { foreignKey: "albumId" });
Felvett_Zene.belongsTo(Bandak, { foreignKey: "bandaId" });
Felvett_Zene.belongsTo(Mufaj, { foreignKey: "mufajId" });
Felvett_Zene.belongsTo(Zene, { foreignKey: "zeneId" });

const app = express();
app.use(express.json());

app.listen(3306, async () => {
  console.log("Sikeres: http://localhost:3306");

  try {
    await sequel.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
});

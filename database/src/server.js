import express from "express";
import "dotenv/config";

import { sequel } from "./utils/database";
import { User } from "./models/Felhasznalo.model";
import { Mufaj } from "./models/mufaj.model";
import { Bandak } from "./models/bandak.model";
import { Zene } from "./models/Zene.model";
import { Album } from "./models/Album.model";
import { Felvett_Zene } from "./models/Felvett_Zenek.model";

Zene.belongsTo(Album);
Zene.belongsTo(Bandak);
Zene.belongsTo(Mufaj);
Album.belongsTo(Bandak);
Album.belongsTo(Mufaj);
Bandak.belongsTo(Mufaj);
Felvett_Zene.belongsTo(Zene);
Felvett_Zene.belongsTo(Album);
Felvett_Zene.belongsTo(Bandak);
Felvett_Zene.belongsTo(Mufaj);

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

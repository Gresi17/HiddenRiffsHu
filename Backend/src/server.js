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
Zene.belongsTo(Mufaj, { foreignKey: "mufajId" });
Album.hasMany(Zene, { foreignKey: "albumId" });
Album.belongsTo(Bandak, { foreignKey: "bandaId" });
Album.belongsTo(Mufaj, { foreignKey: "mufajId" });
Album.hasMany(Zene, { foreignKey: "albumId" });
Bandak.belongsTo(Mufaj, { foreignKey: "mufajId" });
Bandak.hasMany(Album, { foreignKey: "bandaId" });
Mufaj.hasMany(Album, { foreignKey: "mufajId" });
Mufaj.hasMany(Zene, { foreignKey: "mufajId" });
Mufaj.hasMany(Bandak, { foreignKey: "mufajId" });


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Sikeres: http://localhost:3000");
});

app.get("/users", async (req, res) => {
  const data = await User.findAll();
  res.json(data);
});

app.get("/mufajok", async (req, res) => {
  const data = await Mufaj.findAll();
  res.json(data);
});

app.get("/bandak", async (req, res) => {
  const data = await Bandak.findAll();
  res.json(data);
});

app.get("/albumok", async (req, res) => {
  const data = await Album.findAll();
  res.json(data);
});

app.get("/zenek", async (req, res) => {
  const data = await Zene.findAll();
  res.json(data);
});
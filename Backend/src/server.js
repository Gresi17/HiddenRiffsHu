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

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt a felhasználók lekérése során." });
  }
});

app.get("/mufajok", async (req, res) => {
  try {
    const mufajok = await Mufaj.findAll();
    res.json(mufajok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt a műfajok lekérése során." });
  }
});

app.get("/bandak", async (req, res) => {
  try {
    const bandak = await Bandak.findAll();
    res.json(bandak);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt a bandák lekérése során." });
  }
});

app.get("/albumok", async (req, res) => {
  try {
    const albumok = await Album.findAll();
    res.json(albumok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt az albumok lekérése során." });
  }
});

app.get("/zenek", async (req, res) => {
  try {
    const zenek = await Zene.findAll();
    res.json(zenek);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt az zenelek lekérése során." });
  }
});

app.listen(3000, async () => {
  console.log("Sikeres: http://localhost:3000");

  try {
    await sequel.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
});
import express from "express";
import "dotenv/config";

import { sequel } from "./utils/database";
import { User } from "./models/Felhasznalo.model";
import { Mufaj } from "./models/mufaj.model";
import { Bandak } from "./models/bandak.model";
import { Zene } from "./models/Zene.model";
import { Album } from "./models/Album.model";

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

import { User } from "../models/Felhasznalo.model.js";
import { Mufaj } from "../models/mufaj.model.js";
import { Bandak } from "../models/bandak.model.js";
import { Album } from "../models/Album.model.js";
import { Zene } from "../models/Zene.model.js";
import { sequel } from "../utils/database.js";

export async function getById() {
  return await User.findByPk(id, {});
}

export async function create(username, fullName, password, email) {
  const user = await User.create({
    username,
    fullName,
    password,
    email,
  });

  return user;
}

export async function update(fullName, password, id) {
  const user = await User.findByPk(id);
}

import { readBody } from "h3"
import fs from "fs"
import path from "path"
import bcrypt from "bcrypt"

const USERS_FILE = path.resolve("data/users.json")

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: "Email et mot de passe requis" })
  }

  if (!fs.existsSync("data")) fs.mkdirSync("data")

  let users: any[] = []
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
  }

  if (users.find((u) => u.email === email)) {
    throw createError({ statusCode: 400, statusMessage: "Cet utilisateur existe déjà" })
  }

  const hashed = await bcrypt.hash(password, 10)
  const newUser = { id: Date.now(), email, password: hashed }

  users.push(newUser)
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))

  return { success: true, message: "Compte créé avec succès !" }
})
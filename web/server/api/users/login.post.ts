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

  if (!fs.existsSync(USERS_FILE)) {
    throw createError({ statusCode: 404, statusMessage: "Aucun utilisateur trouvé" })
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
  const user = users.find((u) => u.email === email)

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Utilisateur introuvable" })
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    throw createError({ statusCode: 401, statusMessage: "Mot de passe incorrect" })
  }

  const token = Buffer.from(`${user.id}:${Date.now()}`).toString("base64")

  return {
    success: true,
    message: "Connexion réussie",
    token,
    user: { id: user.id, email: user.email },
  }
})
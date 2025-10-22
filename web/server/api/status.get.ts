export default defineEventHandler(async (event) => {
  return {
    message: "Statut de la connexion",
    status: "connected",
  }
})
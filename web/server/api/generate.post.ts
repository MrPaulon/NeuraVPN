export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, serverHost = "vpn.neuravpn.net", serverPort = 51820 } = body

  return {
    message: "Configuration générée avec succès",
    config: username + "@" + serverHost + ":" + serverPort,
  }
})
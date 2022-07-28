const WebSocket = require('ws')

const server = new WebSocket.Server({
  port: 3000
}, () => console.log('server started'))

server.on('connection', (ws) => {
  ws.on('message', (msg) => {
    msg = JSON.parse(msg)
    server.clients.forEach((client) => {
      client.send(JSON.stringify(msg))
    })
  })
})
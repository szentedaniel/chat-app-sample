const express = require('express')
const path = require('path')
const http = require('http')
const socket = require('socket.io')

const PORT = process.env.PORT || 8000 //Port megadása

const app = express()
const server = http.createServer(app) //http szerver létrehozása

 //socket szerver létrehozása

app.use(express.static(path.join(__dirname, '..', 'public'))) //szerver a public mappát szolgálja ki a kliensnek

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT} \nOn local network: http://localhost:${PORT}`)
})

let connected_clients = [] //aktív socketek tárolása

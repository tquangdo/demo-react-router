const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`Port: ${port} de, json-server ga ugoiteiru`)
})


const path = require('path')
const express = require('express')
const app = express()
const portExpress = process.env.PORT - 1 || 3001
app.use(express.static(path.resolve(__dirname, '../react-ui/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
})
app.listen(portExpress, () => {
    console.log(`Expres server is up with port: ${portExpress}!`)
})

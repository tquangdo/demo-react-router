const expres = require('express')
const cors = require('cors')
const app = expres()
app.use(expres.json())
app.use(cors())
app.use(expres.json())
const portApp = process.env.PORT + 1 || 5000

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

if (process.env.NODE_ENV === 'production') {
    app.use(expres.static('build'))
}
app.listen(portApp, () => {
    console.log(`Port: ${portApp} de, app server ga ugoiteiru`)
})
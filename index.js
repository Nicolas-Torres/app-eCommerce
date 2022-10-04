const express = require('express')
const app = express()

const carrito = require('./src/routes/carrito.route')
const productos = require('./src/routes/productos.route')

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', carrito)
app.use('/api', productos)

app.all('*', (req, res) => {
    const { originalUrl, method } = req
    res.send({error: -2, descripcion: `ruta ${originalUrl} método ${method} no implementada`})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor eCommerce listo - PORT: ${PORT}`)
})

server.on('error', err => {
    console.log(err.message)
})

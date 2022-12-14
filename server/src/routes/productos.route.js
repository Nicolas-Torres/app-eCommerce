const express = require('express')
const loggin = require('../middlewares/loggin.middleware')
const Product = require('../controllers/producto.controller')

const daos = require('../daos/index')
const { productoDAO } = daos()

const  { Router } = express

const router = Router()

//* Controlador
const product = new Product('./db/productos.json')

//* Lista todos los productos o uno por su id (user + admin)
router.get('/productos/:id?', async (req,res) => {
    const id = req.params.id ?? 'all'
    try {
        let data
        if(id != 'all'){
            // data = await product.getById(id)
            data = await productoDAO.getById(id)
        } else {
            // data = await product.getAll()
            // console.log('productoDAO: ')
            data = await productoDAO.getAll()

        }
        res.set('Content-Type', 'application/json')
        res.json(data)  // cuando se acopla con el cliente (fetch) debe enviar tipo JSON.stringify
        // res.json(data)
    } catch (err) {
        res.send(err.message)
    } finally {
        console.log(`finally: GET del id ${id} terminado`)
    }
})

//* ADMINISTRADOR
router.use(loggin)

//* Agregar producto (admin)
router.post('/productos/', async (req,res) => {
    const newProduct = req.body
    // console.log(newProduct)
    const data = { timestamp: new Date().toLocaleString(), ...newProduct }
    console.log(data)
    try {
        // console.log(data)
        // await product.add(data)
        await productoDAO.add(data)
        res.status(201).send(data)
    } catch (err) {
        res.send(err.message)
    } finally {
        console.log(`finally: POST terminado`)  
    }
})

//* Actualiza un producto por su id (admin)
router.put('/productos/:id', async (req,res) => {
    const id = req.params.id
    const props = req.body
    try {
        // const updateProduct = await product.update(id, props)
        const updateProduct = await productoDAO.update(id, props)
        res.send(updateProduct)
    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        console.log(`finally: PUT terminado`)
    }
})

//* Borra un producto por su id (admin)
router.delete('/productos/:id', async (req,res) => {
    const id = req.params.id
    try {
        await productoDAO.delete(id)
        res.send(`Producto ${id} borrado.`)
    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        console.log(`finally: DELETE terminado`)
    }
})

module.exports = router


// [
//     {
//         "id": "1",
//         "timestamp": 123456789,
//         "nombre": "nico2",
//         "descripcion": "Desarrollador",
//         "codigo": "iot",
//         "foto": "js",
//         "precio": "lo suficiente2 update",
//         "stock": 1
//   }
// ]
const express = require('express')
const Cart = require('../controllers/carrito.controller')
// const Firebase = require('../controllers/firebase.controller')
// const MongoDB = require('../controllers/mongoDB.controller')



const  { Router } = express

const router = Router()

//* Controlador
const cart = new Cart('./db/carritos.json')
// const dbf = new Firebase('estudiantes')
// const dbm = new MongoDB('carritos', {
//     id: {type: String, required: true, unique: true},
//     timestamp: {type: String, required: true},
//     productos: {type: [], required: false}
// })

// //* Lista todos los productos segun el id del carrito (user + admin)
router.get('/:id/productos', async (req,res) => {
    const cartId = req.params.id
    try {
        // let data1 = await dbf.getAll()
        // console.log('data1 = ', data1)
        // let data2 = await dbm.getAll()
        // console.log('data2 = ', data2)
        let data = await cart.getCart(cartId)
        // console.log(data)
        res.send(data)
        //* LISTAR LOS PRODUCTOS DEL CARRITO SOLICITADO

    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        //! TIMESTAMP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // const ahora = Date.now()
        // console.log(ahora)
        console.log(`finally: GET del carrito id ${cartId} terminado`)
    }
})

// //* Crea un carrito y devuelve su id (user + admin)
router.post('/', async (req,res) => {
    //! Falta saber qe cosa se va a enviar en el body
    const { body } = req
    console.log(body)

    let newCart
    try {
        newCart = await cart.newCart()
        // console.log(newCart)
        res.send({cartId: newCart.id})
        //* LISTAR LOS PRODUCTOS DEL CARRITO SOLICITADO

    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        console.log(`finally: POST del carrito id ${newCart.id} terminado`)
    }
})

// //* Agrega productos al carrito segun el id del carrito (user + admin)
router.post('/:id/productos', async (req,res) => {
    const newProducts = req.body
    const cartId = req.params.id

    try {
        let updateCartId = await cart.addProductsToCart(cartId, newProducts)
        res.send(updateCartId)
    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        console.log(`finally: POST del carrito id ${cartId} terminado`)
    }
})

//* Vacía un carrito y lo elimina segun el id de carrito(user + admin)
router.delete('/:id', (req,res) => {
    const cartId = req.params.id
    try {
        cart.deleteCartById(cartId)
        res.send(`El carrito ${cartId} se eliminó.`)
    } catch (err) {
        res.status(err.status).send(err.message)
    } finally {
        console.log(`finally: DELETE del carrito id ${cartId} terminado`)
    }
})

//* Borra un producto por su id del carrito por su id (user + admin)
router.delete('/:id/productos/:id_prod', async (req,res) => {
    const cartId = req.params.id
    const prodId = req.params.id_prod
    console.log(cartId, prodId)
    try {
        await cart.deleteProductFromCart(cartId, prodId)
        res.send("ok")
    } catch (err) {
        res.send(err.message)
    } finally {
        console.log(`finally: DELETE producto ${prodId} del carrito ${cartId} terminado`)
    }

})


module.exports = router
const dot = require('dotenv').config()
// console.log(dot)
// console.log(process.env.DB)
const daos = {
    firebase: () => {
        console.log('Firebase on')
        const CarritoDAOFirebase = require('./carritos/carritoFirebase.dao')
        // console.log(CartDAOFirebase)
        const ProductoDAOFirebase = require('./productos/productoFirebase.dao')

        return {
            carritoDAO: new CarritoDAOFirebase(),
            productoDAO: new ProductoDAOFirebase()
        }
    },
    mongo: () => {
        console.log('MongoDB on')
        const CarritoDAOMongoDB = require('./carritos/carritoMongoDB.dao')
        const ProductoDAOMongoDB = require('./productos/productoMongoDB.dao')
    
        return {
            carritoDAO: new CarritoDAOMongoDB(),
            productoDAO: new ProductoDAOMongoDB()
        }
    
    },
    json: () => {

    }
}





module.exports = daos[process.env.DB];
// console.log(daos[process.env.DB]())
// daos[process.env.DB]().cartDAO.daof()
// console.log(daos[process.env.DB]().cartDAO.daof())





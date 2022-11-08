const MongoDB = require('../../controllers/mongoDB.controller')

class ProductoDAOMongoDB extends MongoDB {
    constructor(){
        super('productos', {
            timestamp: {type: String, required: true},
            nombre: {type: String, required: true},
            descripcion: {type: String, required: false},
            codigo: {type: String, required: true, unique: true},
            foto: {type: String, required: true},
            precio: {type: String, required: true},
            stock: {type: Number, required: true},
            id: {type: String, required: true, unique: true}
        })
    }

    async daof(){
        console.log('dao producto f')
    }
}

module.exports = ProductoDAOMongoDB
const MongoDB = require('../../controllers/mongoDB.controller')

class CarritoDAOMongoDB extends MongoDB {
    constructor(){
        super('carritos', {
            id: {type: String, required: true, unique: true},
            timestamp: {type: String, required: true},
            productos: {type: [], required: false}
        })
    }

    async daof() {
        console.log('dao carrito f')
    }

}

module.exports = CarritoDAOMongoDB











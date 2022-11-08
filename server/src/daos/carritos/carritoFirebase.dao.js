const Firebase = require('../../controllers/firebase.controller')

class CarritoDAOFirebase extends Firebase {
    constructor(){
        super('estudiantes')
    }

    async daof(){
        console.log('dao carrito f')
    }
}

module.exports = CarritoDAOFirebase
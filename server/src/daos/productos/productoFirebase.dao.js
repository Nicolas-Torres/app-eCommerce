const Firebase = require('../../controllers/firebase.controller')

class ProductoDAOFirebase extends Firebase {
    constructor(){
        super('productos')
    }

    async daof(){
        console.log('dao producto f')
    }
}

module.exports = ProductoDAOFirebase
const dbconfig = require('../config/db.config')
const mongoose = require('mongoose')

const mongoDB_URI = dbconfig.mongoDB.uri
const mongoDB_options = dbconfig.mongoDB.options


mongoose.connect(mongoDB_URI, mongoDB_options)

const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error: "))
db.once("open", function () {
    console.log("MongoDB Connected successfully");
});

// const cart = new Mongo('carritos', {
//     id: {type: String, required: true, unique: true},
//     timestamp: {type: String, required: true},
//     productos: {type: [], required: false}
// })



class Mongo {
    constructor(coleccion, esquema){
        this.db = mongoose.model(coleccion, esquema)
    }

    //! CREATE
    async newCart(newCart) {
        // console.log('newCart = ', newCart)
        try {
            const newDoc = await this.db.create(newCart)
            // console.log('new Doc', newDoc)
            return newDoc
        } catch (e) {
            console.log(e)
        }
    }

    //! READ
    async getAll(){
        const lista = await this.db.find()
        return lista
    }

    //! UPDATE


    //! DELETE
}

module.exports = Mongo
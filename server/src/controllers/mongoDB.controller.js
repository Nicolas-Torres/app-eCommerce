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
    async add(doc) {
        // console.log('newCart = ', newCart)
        try {
            const newDoc = await this.db.create(doc)
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

    async getById(id){
        const doc = await this.db.findOne({id: id})
        return doc
    }

    //! UPDATE
    async update(id, props){
        const doc = await this.db.updateOne({id: id}, {$set: props})
    }

    //! DELETE
    async delete(id){
        const doc = await this.db.deleteOne({id: id})
    }



}

module.exports = Mongo
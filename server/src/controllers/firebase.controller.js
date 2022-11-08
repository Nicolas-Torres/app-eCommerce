const dbconfig = require('../config/db.config')
const project_id = dbconfig.firebase.project_id
const admin = require('firebase-admin')


admin.initializeApp({
    credential: admin.credential.cert(dbconfig.firebase),
    databaseURL: `https://${project_id}.firebaseio.com`
})

const db = admin.firestore()


class Firebase {
    constructor(collection){
        this.collection = db.collection(collection)
    }

    //! CREATE
    async add(doc){
        await this.collection(doc)
    }
    //! READ
    async getAll(){
        const listar = await this.collection.get()
        let docs = []
        listar.forEach(doc => docs.push({id: doc.id, ...doc.data()}))
        // console.log(docs)
        return docs
    }

    async getById(id){
        const doc = await this.collection.doc(id).get()
        console.log(doc)
    }

    //! UPDATE
    async updateById(id, prop){
        const doc = await this.collection.doc(id).set(prop)
        console.log(doc)
    }

    //! DELETE
    async deleteById(id){
        const doc = await this.collection.doc(id).delete()
        console.log(doc)
    }
}


module.exports = Firebase













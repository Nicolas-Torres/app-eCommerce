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
        await this.collection.add(doc)
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
        try{
            const doc = await this.collection.doc(id).get()
            // console.log(doc.data())
            return doc.data()
        } catch (e){
            console.log(e)
        }
    }

    //! UPDATE
    async update(id, props){
        // console.log(props)
        await this.collection.doc(id).update(props)
        const doc = await this.collection.doc(id).get()
        // console.log(doc)
        return doc.data()
    }

    //! DELETE
    async delete(id){
        const doc = await this.collection.doc(id).delete()
        console.log(doc)
    }
}


module.exports = Firebase













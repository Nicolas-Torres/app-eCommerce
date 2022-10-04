const fs = require('fs')

class Product {
    constructor(file){
        this.file = file
    }

    async openFile(){
        try {
            let data = await fs.promises.readFile(`./${this.file}`,'utf-8') || '[]'
            return JSON.parse(data)
        } catch(err) {
            console.log(`Error Open File: ${err}`)
        }
    }
    
    async add(newData){
        let actualData = await this.openFile()
        newData["id"] = (actualData.length + 1).toString()
        actualData.push(newData)
        let saveData = JSON.stringify(actualData)
        await fs.promises.writeFile(`./${this.file}`,saveData)
    }

    async getAll(){
        let actualData = await this.openFile()
        return actualData
    }

    async getById(id){
        let actualData = await this.openFile()
        let item = actualData.filter((val)=> val.id === id )[0]
        if(item == undefined) throw ({message: `Error: Producto con id ${id} no encontrado.`, status: 404})
                                    
        else return item
    }

    async deleteAll(){
        let actualData = await this.openFile()
        actualData = []
        let saveData = JSON.stringify(actualData)
        fs.promises.writeFile(`./${this.file}`,saveData)
        console.log('All data has been removed.')
    }

    async deleteById(id){
        let actualData = await this.openFile()
        let index = actualData.findIndex(val => val.id === id)
        if(index != -1){
            actualData.splice(index,1)
            //! Index format
            actualData.forEach((val,i=0) => val["id"] = (i+1).toString())
        }else{
            throw ({message: `Error: Producto con id ${id} no encontrado.`, status: 404})
        }
        let saveData = JSON.stringify(actualData)
        await fs.promises.writeFile(`./${this.file}`,saveData)
    }

    async update(id, prop){
        const actualData = await this.openFile()
        const updateItem = actualData[id-1]
        if(updateItem == undefined) {
            throw ({message: `Error: Producto con id ${id} no encontrado.`, status: 404})
        } else {
            updateItem.nombre = prop.nombre ?? updateItem.nombre
            updateItem.descripcion = prop.descripcion ?? updateItem.descripcion
            updateItem.codigo = prop.codigo ?? updateItem.codigo
            updateItem.foto = prop.foto ?? updateItem.foto
            updateItem.precio = prop.precio ?? updateItem.precio
            updateItem.stock = prop.stock ?? updateItem.stock

            actualData[id-1] = updateItem
            let saveData = JSON.stringify(actualData)
            await fs.promises.writeFile(`./${this.file}`, saveData)
            return updateItem
        }
    }
}


module.exports = Product
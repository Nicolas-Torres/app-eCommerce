const fs = require('fs')

class Cart {
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

    async newCart() {
        let allCarts = await this.openFile()
        const newCart = {
            id: (allCarts.length + 1).toString(),
            timestamp: new Date().toLocaleString(),
            productos: []
        }
        allCarts.push(newCart)
        let updateAllCarts = JSON.stringify(allCarts)
        await fs.promises.writeFile(`./${this.file}`, updateAllCarts)
        return newCart
    }
    
    async addProductsToCart(cartId,newProducts){
        let allCarts = await this.openFile()
        let updateCart = await this.getCart(cartId)
        const currentProducts = updateCart.productos
        //! En caso ya exista el producto en el carrito
        // this.#isInCart(actualProducts, newProducts)
        const updateProducts = currentProducts.concat(newProducts)
        
        updateCart.productos = updateProducts
        allCarts[cartId-1] = updateCart
        let updateAllCarts = JSON.stringify(allCarts)
        await fs.promises.writeFile(`./${this.file}`, updateAllCarts)
        return cartId
    }

    #isInCart(actualProducts, newProducts) {
        console.log('helo')
        console.log(actualProducts)
        console.log(newProducts)
    }

    async getAll(){
        let allCarts = await this.openFile()
        return allCarts
    }

    async getCart(id){
        let allCarts = await this.openFile()
        let item = allCarts.filter((val)=> val.id === id )[0]
        if(item == undefined) throw ({message: `Error: Carrito con id ${id} no encontrado.`, status: 404})        
        else return item
    }

    async deleteAllCarts(){
        let allCarts = await this.openFile()
        allCarts = []
        let updateAllCarts = JSON.stringify(allCarts)
        fs.promises.writeFile(`./${this.file}`,updateAllCarts)
        console.log('All data has been removed.')
    }

    async deleteProductFromCart(cartId, deleteProductId) {
        let allCarts = await this.openFile()
        let cartIndex = allCarts.findIndex(val => val.id === cartId)
        console.log(cartIndex)
        if(cartIndex != -1){
            const updateCart = allCarts[cartIndex]
            const currentProducts = updateCart.productos
            let prodIndex = currentProducts.findIndex(val => val.id === deleteProductId)
            if(prodIndex != -1){
                console.log(prodIndex)
                //* Borra el producto
                currentProducts.splice(prodIndex,1)
            } else {
                throw ({message: `Error: Producto ${deleteProductId} no encontrado.`, status: 404})
            }
            const updateProducts = currentProducts
            updateCart.productos = updateProducts
            allCarts[cartIndex] = updateCart
        }else{
            throw ({message: `Error: Carrito con id ${cartId} no encontrado.`, status: 404})
        }
        const updateAllCarts = JSON.stringify(allCarts)
        await fs.promises.writeFile(`./${this.file}`,updateAllCarts)
    }

    async deleteCartById(id){
        let allCarts = await this.openFile()
        let cartIndex = allCarts.findIndex(val => val.id === id)
        if(cartIndex != -1){
            //* Borra el carrito segun su index
            allCarts.splice(cartIndex,1)
            //! Index format
            allCarts.forEach((val,i=0) => val["id"] = (i+1).toString())
        }else{
            throw ({message: `Error: Carrito con id ${id} no encontrado.`, status: 404})
        }
        let updateAllCarts = JSON.stringify(allCarts)
        await fs.promises.writeFile(`./${this.file}`,updateAllCarts)
    }
}


module.exports = Cart
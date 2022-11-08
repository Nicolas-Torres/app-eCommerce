const loggin = (req, res, next) => {
    const { originalUrl, method } = req
    const administrador = true
    if(administrador){
        next()
    } else {
        res.status(403).send({error: -1, descripcion: `ruta '${originalUrl}' y método '${method}' no autorizada`})
    }
}

module.exports = loggin
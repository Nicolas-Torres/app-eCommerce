require('dotenv').config()

const DB_FIREBASE = process.env.DB_FIREBASE
const DB_MONGODB = process.env.DB_MONGODB

const dbconfig = {
    firebase: {
        "type": "service_account",
        "project_id": DB_FIREBASE,
        "private_key_id": "49263ddd99f296a10ac77dd6fbd186fe7a98642e",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPt0alpiU9Nj3R\niXHdrh8mmtkE8UhBf8QV3bntc5I1VCNSYbewKPtmCjhSnO9c+IOo4MhY7WUV9ZVm\n3jM6IgjCXqha6qFF9KV7h5DrI7gbqT33KRjmyStOqZwGIqsVwQWgSwL7uFK5aIa+\nl9qSvg7ovW/+zlQ0R0PMc8tb60KyXcVb7QxzBEPsLBYpMopawuBEVIpQ5wFoYl1E\nRj108OJTX8scRbkW0vAWEyzzDqHy4NkujE1C7/nEYJFghzWqVUfMZS+sO/6AzqnW\njAo7sB8KjArUIUoe+70ykkIXRYUBmI5QVjsukM7ZG/rsfWiGCrMPgESq33hdLL+/\ne18nlzFXAgMBAAECggEAFKVzfLtHKqPtwMTyz/ri4XFKeU7LBKkAomnFICs40QXZ\ncvKqkZ8pNJXMeQ2x+cxBOJ6LMNJRQL2wiXve8fwjDGrgkhTjTd2eOz6Y3X58lNHy\n36fdRUdL/4glWDNxok/AJul91OvChpJeCQDKutjwXhrs+xH4KwVwYZia5zqQXm58\nwBq6rWb4NnV0zXzmryTWtqS+17xNMNsHbI3At4NrG+TITmOv/RNSQTT0oJxMLdS5\nb/rs1B7x9qF95do7KRiD0BRnWIcuglLaEYjPlxthSjgrlTdKn34gjeRasEpQQG2D\nvqLZofBb48AxP7LmOLZZE0SnXnzc+0omWfaBEsR8vQKBgQDzeqk2yKwqke7nNOZJ\nqkZP4xc2zasz4tIqm/InelESKDWn7Gryk5hDmwys0tIcC+U0upBQuW3EJP/tcOKX\nmrRtPqNNl0MpeCtfX8z4Z1zslU9q+RC8mPFuu26flW/0Hz+TrC6r3+Gbx8lZM21M\nzcRYjTYRlY2h/V2gkxOMQQBeewKBgQDaZc0xbgwVce+pmG9hE5dTXMLWpBNILJac\nvejk0z95NsTDtA56X6bFsJM3icN9koiGcmKQdOYO6qm443mVpQ/y7bDS4eiRRou1\njSvRbZyckwiWV+ITNR7TRNi/WNAF7TkRbb949FzSjuY+xbsj991Gxrurfw0Lt3J4\nCyu9p9Av1QKBgDUNXSGayCjec3fdhvA2MevmR4Chf9Rmb/To1fLULCYQrOBSG1uP\n3XWdqz1dEnsZ/G9o11k/jjNW/Iz4M+dkxjunkl2tv+yhSpIVhcv6ebzzK8LbUlJF\n4RWHsasEHMjMpkW/FsxMlBQljDHrir1ZeJby7f0W4S2Sz3vVkETXRQVRAoGBAMmV\n5cyWUzkILbtRJJ1qQ+eCW6VbVSDtZyfOc0WjZ5cu4nfxntt9pqYa0ggVdQhXVQUk\nV64W+LMUDwzFitiBvzLwCqLcOpq9jv9JCwUIM+KiJO8At4AbLBS+G4KjK4AM8vwP\nXQj8JSGFHSkbwhz1EJ3fmiI154jFDzeWuA0a9KLxAoGBAKi+kFuMXBPv/BzAnOFz\naPZ4mV07ag1pp9TlWRHC/u2jGxdkftybS3dwGU9iePtUQAtjM82LeRSBSiWoJLZV\nAt7lWAHo7UJxrusIeyNkh8SzBPKpuU88Vd1ZzYREGoePQ4SVk7PaL3q/Lf0Cpz9m\njRbqUjjnI6r5KixVMAQ5l6u6\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-1htii@ecommerce-7da64.iam.gserviceaccount.com",
        "client_id": "113595979424139439189",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1htii%40ecommerce-7da64.iam.gserviceaccount.com"
    },
    mongoDB: {
        uri: `mongodb+srv://nicolas:coder123@ecommerce.lwhtmrl.mongodb.net/${DB_MONGODB}?retryWrites=true&w=majority`,
        options: {
            serverSelectionTimeoutMS: 5000
        }
    }
}
  

module.exports = dbconfig
const crypt = require('bcryptjs')
const db = require('../users/model')
const genToken = require('../../config/genToken')
const secret = require('../../config/secret')
const jwt = require('jsonwebtoken')

//for logging a user in
enticate = async (req, res, next) => {
    console.log('enticate')
    const {username, password} = req.body
    //remove any extra fields in the body
    req.body = {username: username, password: password}

    if(username && password) {
        // const user = await db.get_user_by({username}) <--- try this
        const user = await db.get_user_by({username: username})
        //if user exists check password
        //seeds don't have hashed passwords :(
        if(user && crypt.compareSync(password, user.password)) {
        // if(user && password === user.password) {
            const token = genToken(user)
            req.authorization = token
            next()
        } else {
            res.status(401).json({message: `Invalid Credentials.`})
        }
    } else {
        res.status(500).json({message: `You need both username and password fields.`})
    }
}
//for verifying user tokens
orize = async (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, secret.jwtSecret, (err, payload) => {
        if(err) res.status(403).json({message: `You are not where you belong.`})
        else {
            req.userID = payload.userID
            next()
        }
    })
}

module.exports = {
    enticate,
    orize,
}
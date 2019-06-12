//IMPORTS
const express = require('express')
const router = express.Router()

const db = require('./model')

//MIDDLEWARE
const auth = require('../auth/middleware')
const warez = require('./middleware')

//ROUTE: /api

//C
router.post('/register', warez.check_user, async (req, res) => {
    try {
        const user = await db.add_user(req.body)
        user
        ?   res.status(201).json(user)
        :   res.status(404).json({message: `User couldn't be added.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post('/login', auth.enticate, async (req, res) => {
    try {
        const user = await db.get_user_by({username: req.body.username})
        user
        ?   res.status(201).json({message: `login successful`, token: req.authorization})
        :   res.status(404).json({messgae: 'Wong!'})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/users', auth.orize, async (req, res) => {
    try {
        const users = await db.get_users()
        users.length > 0
        ?   res.status(200).json(users)
        :   res.status(404).json({message: `Couldn't find users.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
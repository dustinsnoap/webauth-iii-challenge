const crypt = require('bcryptjs')
const uuid = require('uuid')

check_user = (req, res, next) => {
    const {username, password, department} = req.body
    if(username && password && department) {
        req.body = {
            uid: uuid.v4(),
            username: username,
            password: crypt.hashSync(password, 12),
            department: department,
        }
        next()
    } else {
        res.status(400).json({message: `username, password, and department are required.`})
    }
}

module.exports = {
    check_user,
}
//IMPORTS
const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

//C
const add_user = async user => 
    await db('users').insert(user)
//R
const get_users = async () =>
    await db('users')
//value = {username: ''} || {id: ''} || etc.
const get_user_by = async value => {
    console.log('made it to get user by')
    return await db('users').first().where(value)
}

module.exports = {
    add_user,
    get_users,
    get_user_by,
}
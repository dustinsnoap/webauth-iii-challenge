exports.seed = async function(knex) {
  await knex('users').insert([
    {uid: 1, username: 'Philip', password: '123', department: 'tacostand'},
    {uid: 2, username: 'J', password: '123', department: 'tacostand'},
    {uid: 3, username: 'Fry', password: '123', department: 'tacostand'},
  ])
}
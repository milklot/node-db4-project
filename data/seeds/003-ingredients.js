exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {ingredient_id: 1,ingredient_name:"Olive Oil"}
  ])
}
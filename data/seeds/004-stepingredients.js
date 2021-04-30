exports.seed = async function(knex) {
  await knex('stepingredients').insert([
    {step_id:2, ingredient_id:1, quantity:42}
  ])
}

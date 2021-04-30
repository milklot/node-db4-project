exports.seed = async function(knex) {
  await knex('recipes').insert([
    {recipe_name: "Spaghetti Bolognese", created_at: "2021-01-01 08:42:42.420"},
    // {recipe_name: "pizza", created_at: "2021-01-01 08:42:42.420"}
  ])
}
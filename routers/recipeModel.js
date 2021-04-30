const db = require('../config');

const findById = async (id) => {
	const recipes = await db("recipes").where({ recipe_id: id }).first();
	const steps = await db("stepingredients as si")
		.join("steps as s", "s.step_id", "si.step_id")
		.join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
		.select("s.step_id", "s.step_number", "s.step_instructions")
		.where({ recipe_id: id });

	const ingredients = await db("stepingredients as si")
		.join("steps as s", "s.step_id", "si.step_id")
		.join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
		.select("i.ingredient_id",
		"i.ingredient_name",
		"si.quantity"
		)
		.where({ recipe_id: id });

  return({
    ...recipes,
    steps: [...steps],
    ingredients: [...ingredients],
  });
};

module.exports = { findById };
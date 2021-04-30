const router = require('express').Router();
const model = require('./recipeModel');

router.get('/:id', async (req, res, next) => {
	try {
		const recipe_id = req.params.id
		const recipe = await model.findById(recipe_id);
		if (!recipe) {
			res.status(404).json({
				message: `recipe with id ${recipe_id} not found`
			})
		}
		else {
			res.status(200).json(recipe);
		}
	}
	catch(err) {
		next(err)
	}
});

module.exports = router;
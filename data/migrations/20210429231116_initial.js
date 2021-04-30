
exports.up = async function(knex) {
	
  await knex.schema.createTable('recipes', (table) => {
	table.increments('recipe_id');
	table.text('recipe_name').unique().notNull();
	table.date('created_at')
		.notNull()
		.defaultTo(knex.raw('current_timestamp'));
  })

  await knex.schema.createTable('steps', (table) => {
	table.increments('step_id');
	table.integer('step_number').unsigned().notNull();
	table.text('step_instructions').notNull();
	table.integer('recipe_id')
		.notNull()
		.unsigned()
		.references('recipe_id')
		.inTable('recipes')
		.onDelete('RESTRICT');
  })

  await knex.schema.createTable('ingredients', (table) => {
	table.increments('ingredient_id');
	table.text('ingredient_name').notNull().unique();
  })

  await knex.schema.createTable('stepingredients', (table) => {
	table.increments('stepingredient_id');
	table.float('quantity').notNull();
	table.integer('ingredient_id')
		.notNull()
		.unsigned()
		.references('ingredient_id')
		.inTable('ingredients')
		.onDelete('RESTRICT');
	table.integer('step_id')
		.notNull()
		.unsigned()
		.references('step_id')
		.inTable('steps')
		.onDelete('RESTRICT');
  })
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('stepingredients')
	await knex.schema.dropTableIfExists('ingredients')
	await knex.schema.dropTableIfExists('steps');
	await knex.schema.dropTableIfExists('recipes');
};

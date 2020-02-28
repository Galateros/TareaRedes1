exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'T-800', description: 'Hasta la vista baby!', price: 100 },
        { name: 'T-850', description: 'A little better than T-800 mode.', price: 200 },
        { name: 'T-800', description: 'Exterminates all life on earth.', price: 300 },
      ]);
    });
};

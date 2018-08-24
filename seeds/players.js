
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, name: 'Rob'},
        // {id: 2, name: 'Cam'},
        // {id: 3, name: 'Dani'}
      ]);
    });
};


exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'testUsername1', password: 'testPassword1', department: 'Marketing'},
      {username: 'testUsername2', password: 'testPassword2', department: 'Research & Development'},
      {username: 'testUsername3', password: 'testPassword3', department: 'Accounting'}
    ]);
};

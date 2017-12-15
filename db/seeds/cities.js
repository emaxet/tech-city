
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {name: 'Vancouver', image: 'https://eatmagazine.ca/wp-content/uploads/2016/05/Vancouver-Image.jpg', tagline: 'The most beautiful city on Earth'},
        {name: 'Mountain View', image: 'http://media2.trover.com/T/56c8f9147eb4f46cfe02923a/fixedw_large_4x.jpg', tagline: 'Google lives here!' },
      ]);
    });
};
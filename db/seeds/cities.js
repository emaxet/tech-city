
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {name: 'Vancouver', image: 'https://eatmagazine.ca/wp-content/uploads/2016/05/Vancouver-Image.jpg', tagline: 'The most beautiful city on Earth'},
        {name: 'Mountain_View', image: 'http://media2.trover.com/T/56c8f9147eb4f46cfe02923a/fixedw_large_4x.jpg', tagline: 'Google lives here!' },
        {name: 'Toronto', image: 'https://media.timeout.com/images/102873865/630/472/image.jpg', tagline: 'The coldest city on Earth' },
        {name: 'Seattle', image: 'https://static.amazon.jobs/locations/66/thumbnails/seattle.jpg?1452011139', tagline: 'SEAHAWKS' },
        {name: 'San Francisco', image: 'http://www.chempartner.com/wp-content/uploads/2016/12/san-francisco-is-americas-snobbiest-city-according-to-the-rest-of-the-country.jpg', tagline: 'The Golden Gate City' },
        {name: 'New York', image: 'http://www.thompsontravelholidays.com/media/uploads/New%20York.jpg', tagline: 'The Big Apple' }
      ]);
    });
};
/**
 * PropertiesController module
 *
 * at the moment, it only exports one async search function
 */

const searchBySuburb = async (suburb) => {
  console.log(`searching properties in ${suburb} ...`);

  return [
    { id: 'sdj23', price: 1200000, address: '12 York Street' },
    { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
    { id: '3j24', price: 750000, address: '668 Inkerman Road' },
  ];
};

module.exports = { searchBySuburb };

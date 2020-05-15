/**
 * PropertiesController module
 *
 * at the moment, it only exports one async search function
 */

const { PropertiesDataProvider } = require('../models');

// search function is agnostic to the underlying data storage mechanism
const searchBySuburb = async (suburb) => {
  return await PropertiesDataProvider.propertiesBySuburb(suburb);
};

module.exports = { searchBySuburb };

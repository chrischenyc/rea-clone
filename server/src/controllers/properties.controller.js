/**
 * PropertiesController module
 *
 * at the moment, it only exports one async search function
 */

const idx = require('idx');
const { PropertiesDataProvider } = require('../models');

// search function is agnostic to the underlying data storage mechanism
const searchBySuburb = async (suburb) => {
  const properties = await PropertiesDataProvider.propertiesBySuburb(suburb);

  // filter properties by suburb keyword
  // assumption: property address string is formatted as "2403 Forster Circle, Carlton"
  let result = properties.filter((property) => {
    const propertySuburb = idx(property, (property) => property.address.split(', ')[1]);

    if (propertySuburb) {
      return propertySuburb.toLowerCase().includes(suburb.toLowerCase());
    }

    // filter out property without a valid address property
    return false;
  });

  return result;
};

module.exports = { searchBySuburb };

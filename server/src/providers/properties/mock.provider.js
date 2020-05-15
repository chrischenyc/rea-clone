const idx = require('idx');
const mockProperties = require('./mock.json');

const propertiesBySuburb = async (suburb) => {
  // filter properties by suburb keyword
  // assumption: property address string is formatted as "2403 Forster Circle, Carlton"
  let result = mockProperties.filter((property) => {
    const propertySuburb = idx(property, (property) => property.address.split(', ')[1]);

    if (propertySuburb) {
      return propertySuburb.toLowerCase().includes(suburb.toLowerCase());
    }

    // filter out property without a valid address property
    return false;
  });

  return result;
};

module.exports = { propertiesBySuburb };

const { PropertiesController } = require('./controllers');

const resolvers = {
  Query: {
    propertiesBySuburb: async (parent, args, context, info) => {
      const { suburb } = args;
      return await PropertiesController.searchBySuburb(suburb);
    },
  },
};

module.exports = resolvers;

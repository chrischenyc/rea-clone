const { PropertiesMockProvider, PropertiesDatabaseProvider, PropertiesElasticSearchProvider } = require('./properties');

let PropertiesDataProvider;

switch (process.env.DATA_PROVIDER) {
  case 'mock':
    PropertiesDataProvider = PropertiesMockProvider;
    break;

  case 'database':
    PropertiesDataProvider = PropertiesDatabaseProvider;
    break;

  case 'elastic-search':
    PropertiesDataProvider = PropertiesElasticSearchProvider;
    break;

  default:
    break;
}

module.exports = { PropertiesDataProvider };

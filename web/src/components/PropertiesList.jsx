import React from 'react';
import PropTypes from 'prop-types';

/**
 * This container component isn't coupled with a certain kind of line item component, which provides us
 * the flexibility to use either SearchedPropertyItem or FavouritePropertyItem
 *
 * @param properties an array of property objects
 * @param renderItem a function to return a React component as property line item
 */
function PropertiesList({ properties, renderItem }) {
  return (
    <div>
      {properties.map((property) => {
        return renderItem(property);
      })}
    </div>
  );
}

PropertiesList.propTypes = {
  properties: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default PropertiesList;

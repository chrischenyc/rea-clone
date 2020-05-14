import React from 'react';

function PropertiesList({ properties, renderItem }) {
  return (
    <div>
      <ul>
        {properties.map((property) => {
          return renderItem(property);
        })}
      </ul>
    </div>
  );
}

export default PropertiesList;

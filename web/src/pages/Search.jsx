import React, { useState } from 'react';

import PropertySearchForm from '../components/PropertySearchForm';
import PropertiesList from '../components/PropertiesList';
import PropertyItem from '../components/PropertyItem';

function Search() {
  const [matchedProperties, setMatchedProperties] = useState([
    { id: 'sdj23', price: 1200000, address: '12 York Street' },
    { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
  ]);

  return (
    <div>
      <PropertySearchForm />
      <PropertiesList
        properties={matchedProperties}
        renderItem={(property) => {
          return (
            <PropertyItem
              key={property.id}
              property={property}
              onAddToFavourites={() => {
                console.log(`add property ${property.address} to favourites`);
              }}
              onRemoveFromFavourites={() => {
                console.log(`remove property ${property.address} from favourites`);
              }}
            />
          );
        }}
      />
    </div>
  );
}

export default Search;

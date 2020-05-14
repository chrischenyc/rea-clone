import React, { useState } from 'react';

import PropertiesList from 'components/PropertiesList';
import FavouritePropertyItem from 'components/FavouritePropertyItem';

function Favourites() {
  const [favouriteProperties, setFavouriteProperties] = useState([
    { id: 'sdj23', price: 1200000, address: '12 York Street' },
    { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
  ]);

  return (
    <div>
      <PropertiesList
        properties={favouriteProperties}
        renderItem={(property) => {
          return (
            <FavouritePropertyItem
              key={property.id}
              property={property}
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

export default Favourites;

import React, { useState } from 'react';

import PropertySearchForm from 'components/PropertySearchForm';
import PropertiesList from 'components/PropertiesList';
import SearchedPropertyItem from 'components/SearchedPropertyItem';
import { AppContext } from 'context';

function Search() {
  const [matchedProperties, setMatchedProperties] = useState([]);

  const handleSearch = (values, { setSubmitting }) => {
    setTimeout(() => {
      const { suburb } = values;

      // TODO: search query with suburb
      console.log(`search ${suburb}`);

      setMatchedProperties([
        { id: 'sdj23', price: 1200000, address: '12 York Street' },
        { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
      ]);

      setSubmitting(false);
    }, 400);
  };

  return (
    <AppContext.Consumer>
      {({ favouriteProperties, addPropertyToFavourites, removePropertyFromFavourites }) => {
        return (
          <div>
            <PropertySearchForm onSearch={handleSearch} />
            <PropertiesList
              properties={matchedProperties}
              renderItem={(property) => {
                const favoured = favouriteProperties.find((favouriteProperty) => favouriteProperty.id === property.id);

                return (
                  <SearchedPropertyItem
                    key={property.id}
                    property={property}
                    favoured={favoured}
                    onAddToFavourites={() => {
                      addPropertyToFavourites(property);
                    }}
                    onRemoveFromFavourites={() => {
                      removePropertyFromFavourites(property);
                    }}
                  />
                );
              }}
            />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Search;

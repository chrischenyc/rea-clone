import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import PropertySearchForm from 'components/PropertySearchForm';
import PropertiesList from 'components/PropertiesList';
import SearchedPropertyItem from 'components/SearchedPropertyItem';
import { AppContext } from 'context';

const SEARCH = gql`
  query search($suburb: String!) {
    search(suburb: $suburb) {
      id
      price
      address
    }
  }
`;

function Search() {
  const [suburb, setSuburb] = useState('');

  const { data, refetch } = useQuery(SEARCH, {
    variables: { suburb },
  });

  const properties = (data && data.search) || [];

  const handleSearch = (values, { setSubmitting }) => {
    const { suburb } = values;

    setSuburb(suburb);
    refetch();

    setSubmitting(false);
  };

  return (
    <AppContext.Consumer>
      {({ favouriteProperties, addPropertyToFavourites, removePropertyFromFavourites }) => {
        return (
          <div>
            <PropertySearchForm onSearch={handleSearch} />

            <PropertiesList
              properties={properties}
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

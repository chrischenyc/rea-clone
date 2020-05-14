import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import PropertySearchForm from 'components/PropertySearchForm';
import PropertiesList from 'components/PropertiesList';
import SearchedPropertyItem from 'components/SearchedPropertyItem';
import { AppContext } from 'context';

const QUERY_PROPERTIES_BY_SUBURB = gql`
  query propertiesBySuburb($suburb: String!) {
    propertiesBySuburb(suburb: $suburb) {
      id
      price
      address
    }
  }
`;

function Search() {
  // search keyword state
  const [suburb, setSuburb] = useState('');

  // GraphqlQL query hook
  const { error, data } = useQuery(QUERY_PROPERTIES_BY_SUBURB, {
    variables: { suburb },
  });

  // query result
  const properties = (data && data.propertiesBySuburb) || [];

  // render
  return (
    <AppContext.Consumer>
      {({ favouriteProperties, addPropertyToFavourites, removePropertyFromFavourites }) => {
        return (
          <div>
            <PropertySearchForm
              onSearch={(values, { setSubmitting }) => {
                const { suburb } = values;
                setSuburb(suburb);
                setSubmitting(false);
              }}
            />

            {error && <div>{`todo: proper GraphQL error handling... ${error}`}</div>}

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

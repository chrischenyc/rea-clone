import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io';

import { priceString } from 'utils/priceString';

function SearchedPropertyItem({ property, favoured, onAddToFavourites, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{priceString(price)}</Card.Title>

        <Card.Text>{address}</Card.Text>

        {favoured && (
          <Button
            variant="outline-secondary"
            onClick={() => {
              onRemoveFromFavourites();
            }}
          >
            <IoIosHeartDislike />
          </Button>
        )}
        {!favoured && (
          <Button
            variant="outline-secondary"
            onClick={() => {
              onAddToFavourites();
            }}
          >
            <IoIosHeart />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

SearchedPropertyItem.defaultProps = {
  favoured: false,
};

SearchedPropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  favoured: PropTypes.bool,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default SearchedPropertyItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { priceString } from 'utils/priceString';

function FavouritePropertyItem({ property, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{priceString(price)}</Card.Title>

        <Card.Text>{address}</Card.Text>

        <Button
          variant="outline-secondary"
          onClick={() => {
            onRemoveFromFavourites();
          }}
        >
          <IoIosCloseCircleOutline />
        </Button>
      </Card.Body>
    </Card>
  );
}

FavouritePropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default FavouritePropertyItem;

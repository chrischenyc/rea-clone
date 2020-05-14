import React from 'react';

function PropertyItem({ property, onAddToFavourites, onRemoveFromFavourites }) {
  const { id, price, address } = property;

  // TODO: figure out if the property has been added to favourites or not
  const favoured = false;

  return (
    <div>
      <div>{price}</div>
      <div>{address}</div>

      {favoured && (
        <button
          onClick={() => {
            onRemoveFromFavourites();
          }}
        >
          remove from favourites
        </button>
      )}
      {!favoured && (
        <button
          onClick={() => {
            onAddToFavourites();
          }}
        >
          add to favourites
        </button>
      )}
    </div>
  );
}

export default PropertyItem;

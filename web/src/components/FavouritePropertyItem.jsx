import React from 'react';

function FavouritePropertyItem({ property, onRemoveFromFavourites }) {
  const { id, price, address } = property;

  return (
    <div>
      <div>{price}</div>
      <div>{address}</div>

      <button
        onClick={() => {
          onRemoveFromFavourites();
        }}
      >
        remove from favourites
      </button>
    </div>
  );
}

export default FavouritePropertyItem;

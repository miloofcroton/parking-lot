import React from 'react';
import PropTypes from 'prop-types';

const CarCard = ({ plate, make, model }) => {
  return (
    <li>
      plate: {plate}
      make: {make}
      model: {model}
    </li>
  );
};

CarCard.propTypes = {
  plate: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};

export default CarCard;

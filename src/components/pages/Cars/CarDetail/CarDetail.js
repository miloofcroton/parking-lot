import React from 'react';
import PropTypes from 'prop-types';

const CarDetail = ({ car }) => {
  const { plate, make, model, inLot, lotUses } = car;
  return (
    <div>
      <p>plate: {plate}</p>
      <p>make: {make}</p>
      <p>model: {model}</p>
      <p>currently in lot: {inLot}</p>
      <p>times in lot: {lotUses}</p>
    </div>
  );
};

CarDetail.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarDetail;

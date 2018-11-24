import React from 'react';
import PropTypes from 'prop-types';

const CarDetail = ({ car, inLot, lotCarDeparted, lotCarArrived }) => {
  const { plate, make, model, lotUses, id } = car;
  const lotHandler = () => inLot ? lotCarDeparted(id) : lotCarArrived(car);
  const lotString = inLot ? 'Remove from lot' : 'Add to lot';

  return (
    <div>
      <p>plate: {plate}</p>
      <p>make: {make}</p>
      <p>model: {model}</p>
      <p>currently in lot: {`${inLot}`}</p>
      <p>times in lot: {lotUses}</p>
      <button onClick={lotHandler}>{lotString}</button>
    </div>
  );
};

CarDetail.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarDetail;

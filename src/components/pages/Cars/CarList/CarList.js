import React from 'react';
import PropTypes from 'prop-types';

import CarCard from '../CarCard';

const CarList = () => {

  const demoCars = [{
    make: 'asdf',
    model: 'asdfasdf',
    plate: 'fdsaf'
  }];

  const demoList = demoCars.map(car => {
    return <CarCard key={car.plate} make={car.make} model={car.model} plate={car.plate} />;
  });

  return (
    <div>
      <h2>Cars!</h2>
      {demoList}
    </div>
  );
};

CarList.propTypes = {};

export default CarList;

import React from 'react';
import PropTypes from 'prop-types';
import CarCard from '../CarCard';
import styles from './CarList.css';

const CarList = ({ cars }) => {


  const carList = cars.map(car => {
    return (
      <CarCard
        key={car.plate}
        make={car.make}
        model={car.model}
        plate={car.plate}
      />
    );
  });

  return (
    <div>
      <h2>Pick A Car, Any Car</h2>
      <div className={styles.carList}>
        {carList}
      </div>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;

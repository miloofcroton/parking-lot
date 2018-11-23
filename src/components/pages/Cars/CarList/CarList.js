import React from 'react';
import PropTypes from 'prop-types';
import CarCard from '../CarCard';
import styles from './CarList.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routes';

const CarList = ({ cars }) => {

  const carList = cars.map(car => {
    return (
      <CarCard
        key={car.plate}
        make={car.make}
        model={car.model}
        plate={car.plate}
        id={car.id}
      />
    );
  });

  return (
    <div>
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

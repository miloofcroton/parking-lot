import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarCard.css'

const CarCard = ({ plate, make, model }) => {
  return (
    <div className={styles.carCard}>
      <p>plate: {plate}</p>
      <p>make: {make}</p>
      <p>model: {model}</p>
    </div>
  );
};

CarCard.propTypes = {
  plate: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};

export default CarCard;

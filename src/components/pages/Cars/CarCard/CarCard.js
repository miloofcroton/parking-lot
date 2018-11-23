import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CarCard.css';
import { ROUTES } from '../../../../routes';


const CarCard = ({ plate, make, model, id }) => {
  return (
    <div className={styles.carCard}>
      <p>plate: {plate}</p>
      <p>make: {make}</p>
      <p>model: {model}</p>
      <Link
        to={ROUTES.CAR_DETAIL.linkTo(id)}
      >See more information
      </Link>
    </div>
  );
};

CarCard.propTypes = {
  plate: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};

export default CarCard;

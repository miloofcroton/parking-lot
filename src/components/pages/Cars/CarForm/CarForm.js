import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CarForm.css';


export default class CarForm extends PureComponent {
  static propTypes = {
    registerCar: PropTypes.func.isRequired
  };

  state = {
    plate: '',
    make: '',
    model: ''
  };

  onChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  saveCar = event => {
    event.preventDefault();
    const { plate, make, model } = this.state;
    this.props.registerCar(plate, make, model);
    this.props.history.push('/cars');
  };


  render() {
    const { plate, make, model } = this.state;
    const { registerCar } = this.props;

    return (
      <form onSubmit={this.saveCar}>
        <div className={styles.registerForm}>
          <label htmlFor="plate">Plate</label>
          <input
            name="plate" type="text"
            value={plate} onChange={this.onChange}
          ></input>

          <label htmlFor="make">Make</label>
          <input
            name="make" type="text"
            value={make} onChange={this.onChange}
          ></input>

          <label htmlFor="model">Model</label>
          <input
            name="model" type="text"
            value={model} onChange={this.onChange}
          ></input>
        </div>

        <button type="submit">Register</button>

      </form>
    );
  }



}

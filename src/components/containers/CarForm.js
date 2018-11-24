import { connect } from 'react-redux';
import CarForm from '../pages/Cars/CarForm';
import { registerCar } from '../../state/actions/cars';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  registerCar: (make, model, plate) => dispatch(registerCar(make, model, plate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarForm);

import { connect } from 'react-redux';
import CarList from '../pages/Cars/CarList';
import { getLotCars } from '../../state/selectors/cars';

const mapStateToProps = state => ({
  cars: getLotCars(state)
});

export default connect(
  mapStateToProps
)(CarList);
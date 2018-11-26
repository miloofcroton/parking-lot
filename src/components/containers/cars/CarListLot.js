import { connect } from 'react-redux';
import CarList from '../../presentations/cars/CarList.jsx';
import { getLotCars } from '../../../data/state/selectors/cars';

const mapStateToProps = state => ({
  cars: getLotCars(state)
});

export default connect(
  mapStateToProps
)(CarList);

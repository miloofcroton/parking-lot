import { connect } from 'react-redux';
import CarList from '../pages/Cars/CarList';
import { getLotCars } from '../../state/selectors/lot';

const mapStateToProps = state => ({
  cars: getLotCars(state)
});

export default connect(
  mapStateToProps
)(CarList);

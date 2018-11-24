import { connect } from 'react-redux';
import CarSearch from '../pages/Cars/CarSearch';
import { carUpdateCarSearchTerm } from '../../state/actions/cars';
import { searchCars } from '../../state/selectors/cars';

const mapStateToProps = state => ({
  cars: searchCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: (searchTerm) => dispatch(carUpdateCarSearchTerm(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSearch);

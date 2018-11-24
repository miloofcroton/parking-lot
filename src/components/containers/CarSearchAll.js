import { connect } from 'react-redux';
import CarSearch from '../pages/Cars/CarSearch';
import { updateSearch } from '../../state/actions/cars';
import { searchCars } from '../../state/selectors/cars';

const mapStateToProps = state => ({
  cars: searchCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchTerm) => dispatch(updateSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSearch);

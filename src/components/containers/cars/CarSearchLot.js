import { connect } from 'react-redux';
import CarSearch from '../../pages/cars/CarSearch.jsx';
import { updateSearch } from '../../../state/actions/cars';
import { searchLotCars } from '../../../state/selectors/cars';

const mapStateToProps = state => ({
  cars: searchLotCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchTerm) => dispatch(updateSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSearch);

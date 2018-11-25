import { connect } from 'react-redux';
import CarList from '../pages/Cars/CarList.jsx';
import { getCars } from '../../state/selectors/cars';

const mapStateToProps = state => ({
  cars: getCars(state)
});

export default connect(
  mapStateToProps
)(CarList);

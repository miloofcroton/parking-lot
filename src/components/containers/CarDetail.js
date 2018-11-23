import { connect } from 'react-redux';
import CarDetail from '../pages/Cars/CarDetail';
import { getCar } from '../../state/selectors/cars';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

export default connect(mapStateToProps)(CarDetail);

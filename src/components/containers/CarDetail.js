import { connect } from 'react-redux';
import CarDetail from '../pages/Cars/CarDetail.jsx';
import { getCar } from '../../state/selectors/cars';
import { carArrived, carDeparted } from '../../state/actions/cars';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  carDeparted: id => dispatch(carDeparted(id)),
  carArrived: id => dispatch(carArrived(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);

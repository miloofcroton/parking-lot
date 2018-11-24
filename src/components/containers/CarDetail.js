import { connect } from 'react-redux';
import CarDetail from '../pages/Cars/CarDetail';
import { getCar } from '../../state/selectors/cars';
import { isCar } from '../../state/selectors/lot';
import { lotCarArrived, lotCarDeparted } from '../../state/actions/lot';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id),
  inLot: isCar(state, props.match.params.id) ? true : false
});

const mapDispatchToProps = dispatch => ({
  lotCarDeparted: id => dispatch(lotCarDeparted(id)),
  lotCarArrived: car => dispatch(lotCarArrived(car))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);

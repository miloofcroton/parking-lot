import { connect } from 'react-redux';
import CarDetail from '../pages/Cars/CarDetail';
import { getCar } from '../../state/selectors/cars';
import { lotCarArrived, lotCarDeparted } from '../../state/actions/lot';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  lotCarDeparted: id => dispatch(lotCarDeparted(id)),
  lotCarArrived: id => dispatch(lotCarArrived(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);

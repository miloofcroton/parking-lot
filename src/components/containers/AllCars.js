import { connect } from 'react-redux';
import Cars from '../pages/Cars';
import { getCars } from '../../state/selectors/cars';
// import { sellCheesePizza } from '../../actions/cars';

const mapStateToProps = state => ({
  cars: getCars(state)
});

// const mapDispatchToProps = dispatch => ({
//   sellPizza: (price) => dispatch(sellCheesePizza(new Date(), price))
// });

export default connect(
  mapStateToProps
)(Cars);

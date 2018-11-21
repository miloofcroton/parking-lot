import { connect } from 'react-redux';
import Cars from '../Pages/Cars';
import { getCars } from '../../selectors/cars';
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

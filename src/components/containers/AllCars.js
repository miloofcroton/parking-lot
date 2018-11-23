import { connect } from 'react-redux';
import CarList from '../pages/Cars/CarList';
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
)(CarList);

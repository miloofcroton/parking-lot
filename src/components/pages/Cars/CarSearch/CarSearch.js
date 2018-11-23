import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CarList from '../CarList';
import { ROUTES } from '../../../../routes';
import queryString from 'querystring';

export default class CarSearch extends PureComponent {

  static propTypes = {
    cars: PropTypes.array.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.search !== this.props.location.search) {
      this.doSearch();
    }
  }

  doSearch = () => {
    const { q } = queryString.parse(this.props.location.search.slice(1));
    if(!q) return;
    this.props.updateSearchTerm(q);
  };

  updateHistory = (options) => {
    const { q: urlSearchTerm } = queryString.parse(this.props.location.search.slice(1));
    const q = options.q || urlSearchTerm;
    const searchQuery = queryString.stringify({ q });
    this.props.history.push({
      pathName: ROUTES.CAR_SEARCH_ALL.path,
      search: searchQuery
    });
  };

  updateSearch = event => {
    event.preventDefault();
    const q = document.getElementById('q').value;
    this.updateHistory({ q });
    this.doSearch;
  };

  render() {

    const { cars } = this.props;

    return (
      <div>
        <form onSubmit={this.updateSearch}>
          <label htmlFor="q">Search</label>
          <input id="q" name="q" type="text" />
          <button type="submit">Search</button>
        </form>
        <CarList cars={cars}/>
      </div>
    );
  }

}

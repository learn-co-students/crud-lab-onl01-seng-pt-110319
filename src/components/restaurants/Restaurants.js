import React, { Component } from 'react';
import Restaurant from './Restaurant';
import PropTypes from 'prop-types';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((r) => 
            <Restaurant removeRest={this.props.removeRest} restaurant={r}/>)
        }
      </ul>
    );
  }
};
Restaurants.propType={
  restaurants: PropTypes.array
}

export default Restaurants;
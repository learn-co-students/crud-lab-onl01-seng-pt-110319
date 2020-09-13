import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
 
  render() {

  	const restaurant = this.props.restaurants.map((restaurant) => {
  		return <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete}/>
  	})

    return(
      <ul>
        Restaurants Component
        {restaurant}
      </ul>
    );
  }
};

export default Restaurants;
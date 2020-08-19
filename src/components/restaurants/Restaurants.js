import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props
    const rList = restaurants.map(restaurant => {
     return (
        <Restaurant 
        key={restaurant.id} 
        restaurant={restaurant} 
        deleteRestaurant={deleteRestaurant}
        />
      )
    })
    return(
    <div>
      <ul>
        {rList}
        {/* {this.props.restaurants.map(restaurant => 
        <Restaurant 
        restaurant={restaurant} 
        deleteRestaurant={deleteRestaurant} */}
        {/* />
        )} */}
      </ul>
    </div>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		restaurants: state.restaurants	
	}
}

const mapDispatchToProps = dispatch => ({
	addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', restaurant}),
	delete: restaurant => dispatch({type: 'DELETE_RESTAURANT', restaurant})
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

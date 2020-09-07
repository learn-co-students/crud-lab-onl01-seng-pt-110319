import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import { addRest, removeRest } from '../components/restaurants/actions.js'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.restAddDis}/>
        <Restaurants restaurants={this.props.restaurants} removeRest={this.props.deleteRestDis}/>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    restaurants: state.restaurants 
  }
};
const mapDispatchToProps = dispatch => {
  return {
    restAddDis: restaurant => { dispatch(addRest(restaurant)) },
    deleteRestDis: restaurant =>{ dispatch(removeRest(restaurant))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer)

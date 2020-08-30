import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }
  

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        Text: <input type="text" name="text" onChange={this.handleOnChange}></input>
        <input type="submit"></input>
        </form>
      </div>
    );
  }
};



export default RestaurantInput

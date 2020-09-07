import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor(props){
    super(props)
    this.state={
      text:''
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.restaurant = {
      id: cuid(),
      text: this.state.text
    }
    this.props.addRest(this.restaurant)
  }
  render(){
    return (
      <div>
        <form onSubmit={event=> this.handleSubmit(event)}>
        <input 
        type="text"
        onChange={event=> this.handleChange(event)}
          value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
export default RestaurantInput
import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
  	super()
  	this.state = {
  		text: ''
  	}
  }

  handleChange = event => {
  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <br/>
        <form className="restaurant-submit" onSubmit={this.handleSubmit}>
       		<input name="text" type="text" onChange={this.handleChange} value={this.state.text}/>
        	<input type="submit"/>
        </form>
      </div>
    );
  }
};



export default RestaurantInput;

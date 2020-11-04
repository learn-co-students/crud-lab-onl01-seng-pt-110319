import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {
  state={
    text: ""
  }
  
  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this.props.
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          Text: <input type="text" name="text" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect() (RestaurantInput);

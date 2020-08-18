import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
}

  handleOnChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <lable>Restaurant Name</lable>
       Text:  <input type="text" 
        name="text"
        onChange={(event) => this.handleOnChange(event)} 
        value={this.state.text}/>
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

//name in the input field is there for when you have multiple inputs to be able to access
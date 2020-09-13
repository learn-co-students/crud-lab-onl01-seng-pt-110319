import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

	const review = this.props.reviews.map(review => {
		if (this.props.restaurantId === review.restaurantId) {	
			return <Review key={review.id} review={review} delete={this.props.delete}/>
		}
	})  

    return (
      <ul>
        Reviews
        {review}
      </ul>
    );
  }
};

export default Reviews;
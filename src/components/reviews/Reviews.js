import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log("props", this.props)
    const filteredReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
    const matchedReviews = filteredReviews.map(review => <Review key={review.id}  review={review} deleteReview={this.props.deleteReview} />)
   
    
    return (
      <ul>
        
        {matchedReviews}
      </ul>
    );
  }
};

export default Reviews;
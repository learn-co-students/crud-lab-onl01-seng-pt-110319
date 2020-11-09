import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const matchedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const theseReviews = matchedReviews.map((review, index) => <Review key={index} deleteReview={deleteReview} review={review} />)
    return (
      <ul>
        {theseReviews}
      </ul>
    );
  }
};

export default Reviews;
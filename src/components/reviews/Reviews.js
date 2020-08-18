import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const rList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <div>
      <ul>
        {rList}
      </ul>
      </div>
    );
  }
};

export default Reviews;

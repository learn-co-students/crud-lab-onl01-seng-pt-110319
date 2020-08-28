import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReview = reviews.filter( (restaurant) => restaurant.restaurantId === restaurantId);

    const reviewsArray = restaurantReview.map((restaurant) => {
      return <Review key={restaurant.id} review={restaurant} deleteReview={deleteReview} />;
    });
    return <ul>{reviewsArray}</ul>;
  }
}

export default Reviews;
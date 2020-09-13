import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		reviews: state.reviews
	}
}

const mapDispatchToProps = dispatch => ({
	addReview: (review, id) => dispatch({type: 'ADD_REVIEW', review: {text: review, id: id}}),
	delete:  review => dispatch({type: 'DELETE_REVIEW', review})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

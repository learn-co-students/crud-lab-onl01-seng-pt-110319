
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

	switch (action.type) {
		case 'ADD_RESTAURANT':
		
		const restaurant = {
			id: cuid(),
			text: action.restaurant
		}

		return {...state, restaurants: [...state.restaurants, restaurant] }

		case 'DELETE_RESTAURANT':
		
		const rest = state.restaurants.filter(restaurant => restaurant.id !== action.restaurant)
		return {...state, restaurants: rest}

		case 'ADD_REVIEW':
		
		const review = {
			restaurantId: action.review.id,
			id: cuid(),
			text: action.review.text
		}

		return {...state, reviews: [...state.reviews, review]}

		case 'DELETE_REVIEW':
		const rev = state.reviews.filter(review => review.id !== action.review.id)
		return {...state, reviews: rev}
	

	default: 
		return state;

	}
}

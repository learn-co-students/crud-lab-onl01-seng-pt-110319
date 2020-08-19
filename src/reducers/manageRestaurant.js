
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    reviews: [], 
    restaurants: []

}, action) {
    

    switch(action.type) {
        case "ADD_RESTAURANT":
            // console.log("inside add_restaurant", action)
            // return {...state, restaurants: state.restaurants.concat({text: action.text, id: cuidFn() })}
            const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        
        case "ADD_REVIEW": 
        console.log("action", action.review.text)
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
            return {...state, reviews: [...state.reviews, review]}

        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
        default: 
            return state;
    }
}

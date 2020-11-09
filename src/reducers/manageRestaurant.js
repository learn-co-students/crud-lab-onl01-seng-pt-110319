import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    reviews: [],
    restaurants: []
    }, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            
            return { ...state, restaurants: state.restaurants.concat({text: action.payload, id: cuidFn()})}

        case "DELETE_RESTAURANT":

            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        

        case "ADD_REVIEW":
            const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn()}
            return { ...state, reviews: [...state.reviews, review]}

        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews}

        default:
            return state;
    }


}

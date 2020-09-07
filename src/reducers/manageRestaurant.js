
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
    restaurants: [
        {
            id: '0',
            text: "tester"
        }
    ]
}
export default function manageRestaurants(state = initialState, action) {
    let idx;
    switch (action.type){
        case "ADD_REST":
            return {
                ...state,
                restaurants: [...state.restaurants, action.restaurant]
            }
        case "REMOVE_REST":
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.id)
            return{
                ...state,
                restaurants: [...state.restaurants.slice(0,idx),...state.restaurants.slice(idx +1)]
            }            
        case "UPDATE_REST":
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.id)
            return{
                ...state,
                restaurants: [...state.restaurants.slice(0,idx),action.restaurant,...state.restaurants.slice(idx +1)]
            }
            default:
                return state
    }
}

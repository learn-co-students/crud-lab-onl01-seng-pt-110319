export const addRest = (obj) =>{
    return {type: 'ADD_REST', restaurant: obj}
} 
export const removeRest = (obj) =>{
    return {type: 'REMOVE_REST', id: obj.id }
}
export const addReview = (review,restaurant)=>{
    return {type: 'ADD_REVIEW', review: review, restaurant: restaurant}
}
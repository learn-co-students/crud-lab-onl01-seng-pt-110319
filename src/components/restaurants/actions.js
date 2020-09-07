export const addRest = (obj) =>{
    return {type: 'ADD_REST', restaurant: obj}
} 
export const removeRest = (obj) =>{
    return {type: 'REMOVE_REST', id: obj.id }
}
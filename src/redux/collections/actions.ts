import { ADD_COLLECTION, DELETE_COLLECTION } from "./actionTypes"

export const addCollection = (collection: any) =>{
    return (dispatch:any) =>{
        dispatch({
            type: ADD_COLLECTION,
            payload: collection
        })
    }
}
export const deleteCollection = (key: any) =>{
    return (dispatch:any) =>{
        dispatch({
            type: DELETE_COLLECTION,
            payload: key
        })
    }
}
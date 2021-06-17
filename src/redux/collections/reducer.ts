import { ADD_COLLECTION, DELETE_COLLECTION } from "./actionTypes";

const initialState = {
    allCollection: [{}]
}
const collectionReducer = (state:any = initialState, action: any) =>{
    switch (action.type) {
        case ADD_COLLECTION:
            return  {
                ...state,
                allCollection: [...state.allCollection, action.payload]
            }
        case DELETE_COLLECTION:
            return  {
                ...state,
                allCollection: state.allCollection.filter(
                    (collection: any) =>
                        collection.key !== action.payload
                    )
            }
        default:
            return state;
    }
}
export default collectionReducer;
import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE } from "../actions/actions"
const initialState = {
    smurfs: [
        {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
        }],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCHING_SMURFS_SUCCESS:
            console.log("suc")
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        default:
            return state
    }
}
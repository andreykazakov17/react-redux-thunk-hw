import { POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../constants";

const defaultValues = {
    isLoading: true,
    posts: []
}

export const postsReducer = (state = defaultValues, action) => {
    switch(action.type) {
        case POSTS_LOADING: {
            return { 
                ...state, 
                isLoading: true 
            }
        }
        case GET_POSTS_SUCCESS: {
            return { 
                isLoading: false, 
                posts: action.payload 
            }
        }
        case GET_POSTS_ERROR: {
            return { 
                ...state, 
                isLoading: false 
            }
        }
        default: {
            return state;
        }
    }
}
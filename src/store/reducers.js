import { ADD_POST, LOAD_POSTS, RESET } from "./types";
import { initialState } from "./configs";

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return Object.assign({}, state, { posts: state.posts.concat(action.payload) })
        case LOAD_POSTS:
            return { ...state, posts: state.posts.concat(action.payload) }
        case RESET:
            return initialState;
        default:
            return state;
    }
} 

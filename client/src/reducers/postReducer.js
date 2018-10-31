import uuid from 'uuid';
import { GET_POSTS, ADD_POST } from '../actions/types'

const initialState = {
    posts: [
        { id: uuid(), title: "The Hell is GIT", body: "This thing is awesome! but man did it take me a while to get my head around." },
        { id: uuid(), title: "Time and Habbits", body: "After a tone of reading and reflection I answer some questions on building habbit and self improvment." },
        { id: uuid(), title: "Tables vs Kitchens", body: "I ansew some questions on Shareefs video where he talks about and discribes the Acadmy and it's culture" },
        { id: uuid(), title: "Technical Blog P2", body: "A design wish list and Technical blog" }

    ]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        default:
            return state;
    }
}

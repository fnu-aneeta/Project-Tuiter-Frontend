import postJson from './data/post.json';

const initialState = {
    post: postJson
}

const post = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-posts':
            return ({
                post: action.post
            })
            break;
        case 'fetch-all-posts-by-email':
            return ({
                post: action.post
            })
            break;
        default:
            return (state);
    }
};

export default post;


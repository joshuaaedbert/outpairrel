import {
    listWardrobe as listPostsFromApi,
    createWardrobe as createPostFromApi
} from '../api/wardrobe.js';

/*  Search text */

export function setfilters(filters) {
    return {
        type: '@FILTERS/SET_FILTERS',
        filters
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}

function endCreatePost(post) {
    return {
        type: '@POST/END_CREATE_POST',
        post
    };
}

export function listPosts(filter) {
    return (dispatch, getState) => {
        return listPostsFromApi(filter).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        })
    };
};

export function createPost(id, tags) {
    return (dispatch, getState) => {
        return createPostFromApi(id,tags).then(post => {
            dispatch(endCreatePost(post));
        }).catch(err => {
            console.error('Error Creating Posts', err);
        })
    };
};
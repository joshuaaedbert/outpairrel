const postKey = 'posts';

export function listWardrobe(filters = []) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listWardrobe(filters));
        }, 500);
    });
}

// Simulated server-side code
function _listWardrobe(filters = []) {
    let postString = localStorage.getItem(postKey);
    let posts = postString ? JSON.parse(postString) : [];
    
    console.log('filters: ' + filters)
    if (posts.length > 0 && filters.length > 0) {
        posts = posts.filter(p => {
            // return !p.tags.some(tag => !filters.includes(tag))
            return !filters.some(tag => !p.tags.includes(tag))
        });
    }
    // console.log(posts)
    return posts;
};

export function createWardrobe(id, tags) {
    return new Promise((resolve, reject) => {
        resolve(_createWardrobe(id, tags));
    });
}

function _createWardrobe(id, tags) {
    const newPost = {
        id: id,
        tags: tags
    };
    const posts = [
        newPost,
        ..._listWardrobe()
    ];
    // localStorage.setItem(postKey, JSON.stringify([]));
    localStorage.setItem(postKey, JSON.stringify(posts));
    console.log(posts)
    return newPost;
}
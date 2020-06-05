const initPostState = {
    postLoading: false,
    posts: [

        {
            id: 0,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
            like: 1
        },
        {
            id: 1,
            photo: 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg',
            like: 75
        },
        {
            id: 2,
            photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/karlie-kloss-is-seen-wearing-a-baby-blue-ralph-lauren-news-photo-1575557364.jpg',
            like: 125
        }

    ],
    hasMore: true
}

export const postReducer = (state = initPostState, action) => {
    return state;
}

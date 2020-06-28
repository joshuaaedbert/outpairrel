const initPostState = {
    postLoading: false,
    id: 0,
    posts: [
        // {
        //     id: 0,
        //     photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
        //     like: 1
        // },
        // {
        //     id: 1,
        //     photo: 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg',
        //     like: 75
        // },
        // {
        //     id: 2,
        //     photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/karlie-kloss-is-seen-wearing-a-baby-blue-ralph-lauren-news-photo-1575557364.jpg',
        //     like: 125
        // }

    ],
    hasMore: true
}

const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case '@POSTS/ADD_POST':
            var newItems = [...state.posts];
            var post = {
                id: state.id,
                photo: action.img,
                tags: action.tags,
                like: 0
            }
            newItems = [post, ...newItems];
            return {
                ...state,
                id: state.id+1,
                posts: newItems
            };
        default:
            return state;
    }
}

export default postReducer;

export function tagReducer(state = [], action) {
    switch (action.type) {
        case '@TAGS/SET_TAGS':
            return action.tags;
        default:
            return state;
    }
  }

  const initTagState = {
    item: [],
    img: '',
    upload: false
}

export function listTagReducer(state = initTagState, action) {
    switch (action.type) {
        // case '@TAG/END_LIST_TAGS':
        //     return {
        //         ...state,
        //         item: action.posts
        //     };
        case '@TAG/END_CREATE_TAGS':
            var newItems = [...state.item];
            if(!newItems.some(el => el[0].name === action.tags[0].name))
                newItems = [action.tags, ...newItems];
            else {
                newItems = newItems.filter(el => {
                    return el[0].name !== action.tags[0].name
                })

                newItems = [action.tags, ...newItems];
            }
            return {
                ...state,
                item: newItems,
            };
        
        case '@TAG/CLEAR_TAGS':
            return {
                img: '',
                item: [],
                upload: true
            };
        
        case '@TAG/SET_IMG':
            return {
                ...state,
                img: action.image
            };
        default:
            return state;
    }
}
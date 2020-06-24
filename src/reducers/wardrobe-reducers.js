
export function filterReducer(state = [], action) {
    switch (action.type) {
        case '@FILTERS/SET_FILTERS':
            return action.filters;
        default:
            return state;
    }
}

const initPostState = {
    item: [
        {
            id: 0,
            tags: ['women','hoodie']
        },
        {
            id: 1,
            tags:['men','shirt']
        },
        {
            id: 2,
            tags:['hoodie']
        }

    ]
}

export function wardrobeReducer(state = initPostState, action) {
    switch (action.type) {
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                item: action.posts
            };
        case '@POST/END_CREATE_POST':
            var newItems = [...state.item];
            newItems = [action.post, ...newItems];
            return {
                ...state,
                item: newItems,
            };
        default:
            return state;
    }
}

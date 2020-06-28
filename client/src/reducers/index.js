import postReducer ,  { tagReducer, listTagReducer }  from './post-reducers';
import productReducer from './product-reducers';
import {wardrobeReducer, filterReducer} from './wardrobe-reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postReducer,
  products: productReducer,
  filter: filterReducer,
  tags: tagReducer,
  item: wardrobeReducer,
  listTags: listTagReducer
});

export default allReducers;
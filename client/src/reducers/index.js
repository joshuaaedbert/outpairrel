import postReducer from './post-reducers';
import productReducer from './product-reducers';
import {wardrobeReducer, filterReducer} from './wardrobe-reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postReducer,
  products: productReducer,
  filter: filterReducer,
  item: wardrobeReducer,

});

export default allReducers;
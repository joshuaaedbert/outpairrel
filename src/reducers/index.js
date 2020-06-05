import postReducer from './post-reducers';
import productReducer from './product-reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postReducer,
  products: productReducer,
});

export default allReducers;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
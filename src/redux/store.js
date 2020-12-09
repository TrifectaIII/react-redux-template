import {createStore} from 'redux';
import reducer from './reducer';

export default createStore(
    
    reducer, /* preloadedState, */
    
    //turns on react dev tools extention
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
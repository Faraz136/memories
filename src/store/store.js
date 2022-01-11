import {combineReducers , createStore} from 'redux';
import postReducer from './postReducer';

const allReducers = combineReducers({
    postReducer , 
})

const myStore = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default myStore;
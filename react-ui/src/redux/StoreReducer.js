import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from './reducers/Reducer'
import thunk from 'redux-thunk'

// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
var storeReducer = createStore(myReducer, compose(
    applyMiddleware(thunk), // phải để cái này ở trên, KO được move xuống dưới Redux Devtools
    // devTools
))
// storeReducer.subscribe(() => {
//     console.log(storeReducer.getState())
// })
export default storeReducer
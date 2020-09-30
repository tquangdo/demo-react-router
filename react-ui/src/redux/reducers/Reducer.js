import { combineReducers } from 'redux'
import reducerSanpham from './ReducerSanpham'
import reducerSPDeSua from './ReducerSPDeSua'

var myReducer = combineReducers({
    reducerSanpham, reducerSPDeSua
})

export default myReducer

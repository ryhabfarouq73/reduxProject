import {combineReducers} from 'redux'
import PostReducers from './postReducer'

//root reducers
export default  combineReducers({
    posts :PostReducers
});
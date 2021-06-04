import { createStore, applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import rootReducers from "./Reducers";

const initialState = {};
const middlewares = [thunk];

//create store
export default createStore(rootReducers,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        //to appear un reduxdev tool
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
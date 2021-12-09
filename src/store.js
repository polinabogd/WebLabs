import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from '../src/elements/redux/reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    todoReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
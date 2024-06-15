import { legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import mainReducer from '../reducers';



const store = createStore(
    mainReducer,
    {},
   composeWithDevTools(applyMiddleware(thunk))
);
export default store

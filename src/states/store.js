import { applyMiddleware, createStore } from 'redux'
import reducers from './reducerCreator/index'
import thunk from "redux-thunk"

export const store = createStore(reducers, {}, applyMiddleware(thunk))
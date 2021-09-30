import {combineReducers, createStore} from "redux";
import gameMemoryReducer from "./reducers/gameMemory-reducer";

const reducers = combineReducers({
    gameMemoryReducer,
})

export const store = createStore(reducers)
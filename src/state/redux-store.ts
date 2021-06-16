import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
    count: countReducer
})

const start = localStorage.getItem('startValue');
const max = localStorage.getItem('maxValue');
let preloaderState = {} as AppStateType;
if (start && max) {
    preloaderState = {
        count: {
            start: JSON.parse(start),
            max: JSON.parse(max),
            count: JSON.parse(start),
            isError: null
        }
    };
}

let store = createStore(rootReducer, preloaderState)

store.subscribe(() => {
    localStorage.setItem("startValue", JSON.stringify(store.getState().count.start))
    localStorage.setItem("maxValue", JSON.stringify(store.getState().count.max))
})

export type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export default store
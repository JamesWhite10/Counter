import React from 'react';
import './App.css';
import {Count} from "./components/Count";
import {ControlDisplay} from "./components/ControlDisplay";
import {SettingsDisplay} from "./components/SettingsDisplay";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/redux-store";
import {Decrement, Increment, InitialStateType, MaxValue, Reset, SetError, StartValue} from "./state/count-reducer";

function App() {

    const state = useSelector<AppStateType, InitialStateType>(state => state.count)

    const dispatch = useDispatch()

    function increment() {
           dispatch(Increment())
    }
    function decrement() {
            dispatch(Decrement())
    }
    function reset() {
        dispatch(Reset())
    }
    function startValue(value: number) {
        dispatch(StartValue(value))
    }
    function maxValue(value: number) {
        dispatch(MaxValue(value))
    }

    function setValue() {
        dispatch(SetError(null))
        if (state.start < state.max)
            dispatch(StartValue(state.start))
        else
            dispatch(SetError(true))
    }

    return (
        <div>
            <Count
                count={state.count}
                isError={state.isError}
                max={state.max}/>
            <ControlDisplay
                count={state.count}
                increment={increment}
                decrement={decrement}
                reset={reset}
                start={state.start}
                max={state.max}/>
            <SettingsDisplay
                count={state.count}
                start={state.start}
                max={state.max}
                setValue={setValue}
                startValue={startValue}
                maxValue={maxValue}/>
        </div>
    )
}

export default App;

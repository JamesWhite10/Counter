import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {ControlDisplay} from "./components/ControlDisplay";
import {SettingsDisplay} from "./components/SettingsDisplay";

function App() {

    const [count, setCount] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [isError, setIsError] = useState<boolean | null>(false);

    useEffect(() => {
        let startAsString = localStorage.getItem('startValue')
        if (startAsString) {
            let newValue = JSON.parse(startAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect(() => {
        let maxAsString = localStorage.getItem('maxValue')
        if (maxAsString) {
            let newValue = JSON.parse(maxAsString)
            setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [startValue, maxValue])

    function increment() {
        if (count < maxValue) {
            setCount(count +1)
        }
    }
    function decrement() {
        if (count > startValue) {
            setCount(count -1)
        }
    }
    function reset() {
        setCount(startValue)
    }
    function startValueCounter(value: number) {
        setStartValue(value)
    }
    function maxValueCounter(value: number) {
        setMaxValue(value)
    }

    function onClickSetValue() {
        setIsError(null)
        if (startValue < maxValue) setCount(startValue)
        else setIsError(true)
    }

    return (
        <div>
            <Count
                count={count}
                isError={isError}
                maxValue={maxValue}/>
            <ControlDisplay
                count={count}
                increment={increment}
                decrement={decrement}
                reset={reset}
                startValue={startValue}
                maxValue={maxValue}/>
            <SettingsDisplay
                count={count}
                startValue={startValue}
                maxValue={maxValue}
                onClickSetValue={onClickSetValue}
                startValueCounter={startValueCounter}
                maxValueCounter={maxValueCounter}/>
        </div>
    )
}

export default App;

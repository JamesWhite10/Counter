import {Button} from "@material-ui/core";
import React from "react";

type ControlPropsType = {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    startValue: number
    maxValue: number
}

export const ControlDisplay: React.FC<ControlPropsType> = ({count, increment, decrement, reset, startValue ,maxValue}) => {
    return (
        <div className="app-wrapper">
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px"}}
                color={"primary"}
                disabled={count === maxValue} onClick={increment}>Inc</Button>
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px"}}
                color={"primary"}
                disabled={count === startValue} onClick={decrement}>Dec</Button>
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px", textAlign: "center"}}
                color={"secondary"}
                disabled={count === startValue} onClick={reset}>Res</Button>
        </div>
    );
}

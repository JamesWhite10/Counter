import {Button} from "@material-ui/core";
import React from "react";

type ControlPropsType = {
    count: number
    start: number
    max: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const ControlDisplay: React.FC<ControlPropsType> = ({
                                                               count, increment,
                                                               decrement, reset, start, max
                                                           }) => {
    return (
        <div className="app-wrapper">
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px"}}
                color={"primary"}
                disabled={count === max} onClick={increment}>Inc</Button>
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px"}}
                color={"primary"}
                disabled={count === start} onClick={decrement}>Dec</Button>
            <Button
                variant={"contained"}
                size={"large"}
                style={{margin: "5px", textAlign: "center"}}
                color={"secondary"}
                disabled={count === start} onClick={reset}>Res</Button>
        </div>
    );
}

import React, {ChangeEvent} from "react";
import {Button} from "@material-ui/core";

type SettingsPropsType = {
    count: number
    start: number
    max: number
    setValue: () => void
    startValue: (value: number) => void
    maxValue: (value: number) => void
}

export const SettingsDisplay: React.FC<SettingsPropsType> = (props) => {

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => props.startValue(+e.currentTarget.value)
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => props.maxValue(+e.currentTarget.value)

    return (
        <div className="control">
            <div className="start">
                StartValue: <input className="input"
                                   value={props.start}
                                   onChange={onChangeStartValue}
                                   type="number"
                                   min={"0"}
                                   max={"99"}/>
            </div>
            <div className="max">
                MaxValue: <input className="input"
                                 value={props.max}
                                 onChange={onChangeMaxValue}
                                 type="number"
                                 min={"0"}
                                 max={"99"}/>
            </div>
            <Button
                className="set"
                variant={"contained"}
                size={"large"}
                onClick={props.setValue}
                color={"default"}>Set</Button>
        </div>
    )
}
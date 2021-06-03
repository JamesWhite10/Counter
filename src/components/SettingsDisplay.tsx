import React, {ChangeEvent} from "react";
import {Button} from "@material-ui/core";

type SettingsPropsType = {
    count: number
    startValue: number
    maxValue: number
    onClickSetValue: () => void
    startValueCounter: (value: number) => void
    maxValueCounter: (value: number) => void
}

export const SettingsDisplay: React.FC<SettingsPropsType> = (props) => {

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => props.startValueCounter(+e.currentTarget.value)
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => props.maxValueCounter(+e.currentTarget.value)

    return <div className="control">
        <div className="start">
            StartValue: <input className="input"
                               value={props.startValue}
                               onChange={onChangeStartValue}
                               type="number"
                               min={"0"}
                               max={"99"}/>
        </div>
        <div className="max">
            MaxValue: <input className="input"
                             value={props.maxValue}
                             onChange={onChangeMaxValue}
                             type="number"
                             min={"0"}
                             max={"99"}/>
        </div>
        <Button
            className="set"
            variant={"contained"}
            size={"large"}
            onClick={props.onClickSetValue}
            color={"default"}>Set</Button>
    </div>
}
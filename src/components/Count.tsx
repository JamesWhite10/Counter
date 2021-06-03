import React from "react";

type CountPropsType = {
    count: number
    isError: boolean | number | null
    maxValue: number
}

export const Count: React.FC<CountPropsType> = ({count, isError, maxValue}) => {
    let isRed = count === maxValue || isError;
    return (
        <h1 className={`count ${isRed ? "active" : ""}`}>{isError ? 'Incorrect number' : count}</h1>
    );
}
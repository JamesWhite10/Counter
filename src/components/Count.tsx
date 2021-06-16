import React from "react";

type CountPropsType = {
    count: number
    isError: boolean | number | null
    max: number
}

export const Count: React.FC<CountPropsType> = ({count, isError, max}) => {
    let isRed = count === max || isError;
    return (
        <h1 className={`count ${isRed ? "active" : ""}`}>{isError ? 'Incorrect number' : count}</h1>
    );
}
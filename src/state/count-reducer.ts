export type InitialStateType = {
    count: number
    start: number
    max: number
    isError: boolean | null
}

const initialState: InitialStateType = {
    count: 0,
    start: 0,
    max: 0,
    isError: null
}

type ActionType = IncrementType | DecrementType | ResetType
    | StartValueType | MaxValueType | SetErrorType

type IncrementType = {
    type: "INCREMENT"
}
type DecrementType = {
    type: "DECREMENT"
}
type ResetType = {
    type: "RESET"
}
type StartValueType = {
    type: "START-VALUE"
    value: number
}
type MaxValueType = {
    type: "MAX-VALUE"
    value: number
}
type SetErrorType = {
    type: "SET-ERROR"
    isError: boolean | null
}

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return state.count < state.max ? {
                ...state,
                count: state.count + 1
            } : state;
        case "DECREMENT":
            return state.count > state.start ? {
                ...state,
                count: state.count -1
            } : state
        case "RESET":
            return {
                ...state,
                count: state.start
            }
        case "START-VALUE":
            return {
                ...state,
                start: action.value,
                count: action.value
            }
        case "MAX-VALUE":
            return {
                ...state,
                max: action.value
            }
        case "SET-ERROR":
            return {
                ...state,
                isError: action.isError
            }
        default:
            return state
    }
}

export const Increment = (): IncrementType => ({type: "INCREMENT",})
export const Decrement = (): DecrementType => ({type: "DECREMENT"})
export const Reset = (): ResetType => ({type: "RESET"})
export const StartValue = (value: number): StartValueType => ({type: "START-VALUE", value})
export const MaxValue = (value: number): MaxValueType => ({type: "MAX-VALUE", value})
export const SetError = (isError: boolean | null): SetErrorType => ({type: "SET-ERROR", isError})

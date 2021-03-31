export const Good_Morning : string = "Good_Morning"
export const Good_Afternoon : string = "Good_Afternoon"
export const Good_Evening : string = "Good_Evening"

export interface ActionType {
    type : string
}

export const goodMorning = () : ActionType => {
    return {
        type : Good_Morning
    }
};
export const goodAfternoon = () : ActionType => {
    return {
        type : Good_Afternoon
    }
};
export const goodEvening = () : ActionType => {
    return {
        type : Good_Evening
    }
};

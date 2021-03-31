import * as wishMessageActions from "./WishMessage.action";


export interface messageState {
    message : string
}

let initialState: messageState = {
    message : "Hello"
}

export const reducer = (state = initialState , action : wishMessageActions.ActionType):messageState => {
    switch (action.type){
        case wishMessageActions.Good_Morning :
            return {
                message : "Good Morning"
            }
        case wishMessageActions.Good_Afternoon :
            return {
                message : "Good Afternoon"
            }
        case wishMessageActions.Good_Evening :
            return {
                message : "Good Evening"
            }
        default  : return state;
    }
}
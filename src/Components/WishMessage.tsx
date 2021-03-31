import React from "react"
import * as wishMessageActions from "../redux/WishMessage/WishMessage.action";
import * as wishMessageReducer from "../redux/WishMessage/WishMessage.reducer";
import {useDispatch, useSelector} from "react-redux";
interface IProps{
}
interface wishMessageType {
    message : wishMessageReducer.messageState
}

let WishMessage : React.FC<IProps> = () => {

    let dispatch = useDispatch();

    let messageState : wishMessageReducer.messageState = useSelector((state : wishMessageType) => {
        return state.message
    })

    let sayGoodMorning = () => {
       dispatch(wishMessageActions.goodMorning())
    }
    let sayGoodAfternoon = () => {
        dispatch(wishMessageActions.goodAfternoon())
    }
    let sayGoodEvening = () => {
        dispatch(wishMessageActions.goodEvening())
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                    <h2>{messageState.message}</h2>
                    <button className="btn btn-primary" onClick={sayGoodMorning}>Good Morning</button>
                    <button className="btn btn-secondary" onClick={sayGoodAfternoon}>Good Afternoon</button>
                    <button className="btn btn-success" onClick={sayGoodEvening}>Good Evening</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default WishMessage;
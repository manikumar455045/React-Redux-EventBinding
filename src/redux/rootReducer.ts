import {combineReducers} from "redux";
import * as WishMessage from "../redux/WishMessage/WishMessage.reducer";
import * as ProductCart from "./product-cart/ProductCart.reducer";
import * as Cart from "./shopping-cart/shopping-cart.reducer"
let rootReducer = combineReducers({
message : WishMessage.reducer,
  product : ProductCart.reducer,
  cart : Cart.reducer
});

export default rootReducer;
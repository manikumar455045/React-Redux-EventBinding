import React from "react"
import * as cartActions from "../redux/shopping-cart/shopping-cart.action";
import * as cartReducer from "../redux/shopping-cart/shopping-cart.reducer"
import {useDispatch, useSelector} from "react-redux";
interface IProps{
}
interface IState {
    cart : cartReducer.cartState
}

let ShoppingCart : React.FC<IProps> = () => {

    let dispatch = useDispatch();

    let cart : cartReducer.cartState = useSelector((cart : IState) => {
        return cart.cart
    })

    let incQty = (sno : string) => {
      dispatch(cartActions.incrProductQty(sno))
    }
    let decQty = (sno : string) => {
        dispatch(cartActions.decrProductQty(sno))
    }

    return (
        <React.Fragment>
            <section>
                <section className="mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Your Cart</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim nam nemo nostrum, praesentium ut. Animi aut commodi eum illo ipsa iusto modi nemo nobis quaerat suscipit, unde veniam voluptates.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="mt-2">
                <div className="container">
                    <table className="table  table-hover text-center text-dark">
                        <thead className="bg-dark text-white">
                        <tr>
                            <td>S.no</td>
                            <td>Product Name</td>
                            <td>Product image</td>
                            <td>Qty</td>
                            <td>Price</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.product.map((product) => {
                                return (
                                    <tr key={product.sno}>
                                        <td>{product.sno}</td>
                                        <td>{product.name}</td>
                                        <td><img src={product.img} className="img-fluid" width="50px" alt=""/></td>
                                        <td><i className="fa fa-minus-circle mx-1" onClick={decQty.bind(this,product.sno)}></i>{product.qty}<i className="fa fa-plus-circle mx-1" onClick={incQty.bind(this, product.sno)}></i></td>
                                        <td>{product.qty * product.price}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </React.Fragment>
    )

}

export default ShoppingCart;
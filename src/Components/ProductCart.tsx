import React from "react"
import * as productCartActions from "../redux/product-cart/ProductCart.action"
import * as productCartReducer from "../redux/product-cart/ProductCart.reducer"
import {useDispatch, useSelector} from "react-redux";

interface IProps{
}
interface IProductState{
    product : productCartReducer.IProduct
}

let ProductCart : React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let ProductState : productCartReducer.IProduct = useSelector((state: IProductState) => {
       return state.product
    })

    let decQty = () => {
        dispatch(productCartActions.decrProductQty())
    }
    let incQty = () => {
        dispatch(productCartActions.incrProductQty())
    }

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim nam nemo nostrum, praesentium ut. Animi aut commodi eum illo ipsa iusto modi nemo nobis quaerat suscipit, unde veniam voluptates.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <table className="table table-hover text-center text-white table-striped">
                        <thead className="bg-dark">
                        <tr>
                            <td>Sno</td>
                            <td>Product Name</td>
                            <td>Product image</td>
                            <td>Qty</td>
                            <td>Total Price</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{ProductState.sno}</td>
                            <td>{ProductState.name}</td>
                            <td><img src={ProductState.img}  width="50px" className="img-fluid" alt=""/></td>
                            <td><i className="fa fa-minus-circle" onClick={decQty}/> {ProductState.qty} <i className="fa fa-plus-circle" onClick={incQty}/></td>
                            <td>{ProductState.price * ProductState.qty}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </React.Fragment>
    )

}

export default ProductCart;
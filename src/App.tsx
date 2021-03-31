import React from 'react';
import "./App.css";
import WishMessage from "./Components/WishMessage";
import ProductCart from "./Components/ProductCart";
import ShoppingCart from "./Components/ShoppingCart";






let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">React Redux Event Bindings</a>
            </div>
        </nav>
        {/*<WishMessage />*/}
        {/*<ProductCart/>*/}
        <ShoppingCart/>
        </React.Fragment>
  );
}

export default App;

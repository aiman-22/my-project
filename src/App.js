import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cartIcon from "./components/cartIcon";
import { Provider } from "react-redux";
import store from "./store/store";
//pages
import Home from "./pages/home";
import cart from "./pages/cart";
import products from "./pages/products";
import Product from "./pages/product";
import CartIcon from './components/cartIcon';


function App() {
  return (
    <Router>
    <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand mb-0 h1">Date store</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
               <Link className="nav-link" to="/">Home</Link>
           </li>
           <li className="nav-item">
               <Link className="nav-link" to="/products">products</Link>
           </li>
           <li className="nav-item">
               <Link className="nav-link" to="/cart">cart</Link>
           </li>
           
    </ul>
   
  </div>
  
           <CartIcon/>
          
</nav>

          <Route path="/" component={Home} exact/>
          <Route path="/products" component={products}exact/>            
          <Route path="/product/:id" component={Product}/>
          <Route path="/cart" component={cart}/>

    </div>
    </Router>
  );
}

function AppWithStore() {
  return <Provider store={store}>
    <App/>
    </Provider>

  
}
export default AppWithStore;

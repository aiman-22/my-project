import react from "react";
import Productitem from "../components/productitem";
import productsApi from "../api/products";

export default class products extends react.Component{

    state = {
        products: [],

    };
    componentDidMount(){
        productsApi.getAll()
        .then( data => {
           this.setState({
               products: data
           })
        });

    }
     render() {
        
    
    return(
        <div>
            <h1>Products</h1>

                <div className="row">
                    {this.state.products.map(product =>
                <div className={'col-4'} key={product.id}>
                 <Productitem product={product} />
                    </div>
                     
                    )}
                    </div>
                   

               
            </div>
          

    );
}
}

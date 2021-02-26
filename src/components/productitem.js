import react from "react";
import products from "../api/products";

export default function productitem(props) {
    const{product} = props;
        return (
            <div className="card"> 
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                    {product.name}
                    </h5>
                    <p className="card-text">{product.price}د.ل
                    </p>

                    <a href={"/product/" + product.id}  className="btn btn-primary">تفاصيل</a>
                </div>
            </div>

        


    );
}
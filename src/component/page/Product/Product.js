import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css"

const Product = ({ product }) => {
  const { productName, price, image, description, quantity,_id } = product;
  const navigate = useNavigate()

  const updateProduct = pd =>{
    navigate(`/item/${pd}`)
  }
  return (
    <div className="border rounded">
      <div className="p-2 product-details">
        <img src={image} alt="" height={250} className="w-100 rounded" />
        <h3>{productName.slice(0, 30)}</h3>
        <h5>Price:{price}</h5>
        <h6>Stock:{quantity}</h6>
        <p>{description.slice(0, 90)}</p>
        <button onClick={()=>updateProduct(_id)} className="btn btn-success">Update Product</button>
      </div>
    </div>
      
  );
};

export default Product;

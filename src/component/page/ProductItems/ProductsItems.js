import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import "./ProductItems.css"

const ProductsItems = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const url = "http://localhost:5000/products"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data)
        })
    },[])

    const navigateInventory = ()=>{
        navigate('/manageInventory')
    }
    return (
        <div>
            <h2 className='mt-5 mb-0 text-center font-bold'>Products</h2>
            <div className='product-info  mx-auto'>
                {
                    products.slice(0,6).map(pd => <Product key={pd._id} product={pd}></Product>)
                }
            </div>
            <div className='manage-button container'>
                <button onClick={navigateInventory} className="btn btn-success">Manage Inventory</button>
            </div>
        </div>
    );
};

export default ProductsItems;
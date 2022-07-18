import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Item.css"

const Item = () => {
    const {id} = useParams();
    const [updateItem, setUpdateItem] = useState({})
    console.log(updateItem);

    const {productName, description, image, quantity, price, _id} = updateItem

    useEffect(()=>{
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUpdateItem(data)
        })
    },[])

    // useEffect(()=>{
    //     const url = `http://localhost:5000/item/${id}`
    //     fetch(url, {
    //         method: "PUT",
    //         body: JSON.stringify(),
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8",
    //         },
    //       })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           console.log(data)
    //       });
        
    // },[])

   
    return (
        <div>
            <div className="container row mt-5 p-5 d-flex mx-auto item-section">
                <div className=' pe-5 col-md-6 item-image'>
                  <img src={image} alt="" height={250} width={400} className="w-100 rounded" />
                </div>
                <div className="d-flex justify-content-center align-items-center col-md-6">
                    <div>
                       <div>
                       <h3>{productName?.slice(0, 30)}</h3>
                        <h5>Price: <span>{price}</span></h5>
                        <p className='mb-1'>{description?.slice(0, 150)}</p>
                        <h5>Available Stock: <span >{quantity}</span>  <button className="delivered-btn ms-2"
                        >Delivered</button></h5>
                       </div>
                       <div className='mt-3'>
                        <form>
                        <input type="number" className="form-control d-inline w-50" name="updateValue" min="1"     placeholder="add quantity" />
                           <button className='btn btn-success mb-1'>Update Quantity</button>
                        </form>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
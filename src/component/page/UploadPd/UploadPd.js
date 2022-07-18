import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import "./UploadPd.css";


const UploadPd = () => {
  const [user] = useAuthState(auth)
  const uploadPd = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const email = user.email;
    const url = "https://arcane-peak-20935.herokuapp.com/uploadPd";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        productName, price, quantity, image, description,email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset() 
        console.log(data)
    });
  };
  return (
    <div className="mt-5 add-product container">
      <h2 className="text-center mb-3">product upload</h2>
      <form className=" mx-auto  border rounded add-form" onSubmit={uploadPd}>
        <div className="d-flex gap-4">
          <div className="form-group mt-2">
            <label htmlFor="inputAddress">Product Name</label>
            <input
              name="productName"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="product name"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="inputAddress2">Price</label>
            <input
              name="price"
              type="number"
              min="0"
              className="form-control"
              id="inputAddress2"
              placeholder="Inter your price"
              required
            />
          </div>
        </div>
        <div className="d-flex gap-4">
          <div className="form-group mt-2">
            <label htmlFor="inputAddress">Quantity</label>
            <input
              name="quantity"
              type="number"
              min="1"
              className="form-control"
              id="inputAddress"
              placeholder="product quantity"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="inputAddress2">Image Link</label>
            <input
              name="image"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="image link"
              required
            />
          </div>
        </div>
        <div className="">
          <div className="form-group col-md-12 mt-2">
            <label htmlFor="inputCity">Product Description</label>
            <textarea
              name="description"
              className="form-control textArea"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="product description"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default UploadPd;

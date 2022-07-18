import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageAllItem from "../ManageAllItem/ManageAllItem";
import "./AllItem.css";

const AllItem = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const { productName, price, quantity } = items;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://arcane-peak-20935.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  const handelDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure YOU want to delete it?");
    if (proceed) {
      const url = `https://arcane-peak-20935.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          if (data.deletedCount > 0) {
            setItems(remaining);
          }
        });
    }
  };

  const navigateAddItemPage = () => {
    navigate("/uploadPd");
  };
  return (
    <div>
      <h1 style={{color:"#555"}} className="text-center m-4 border-bottom pb-3 mb-5">Manage Inventories</h1>
      <div className="text-end container m-3">
        <button className="btn btn-success add-btn" onClick={navigateAddItemPage}>
          Add New Item
        </button>
      </div>
      <table className="table table-striped table-hover container table-bordered mb-5">
        <thead className="table-header">
          <tr>
            <th  className="col-md-6">
              Name
            </th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ManageAllItem
              key={item._id}
              item={item}
              handelDeleteItem={handelDeleteItem}
            ></ManageAllItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllItem;

import React, { useEffect, useState } from "react";
import "./ManageAllItem.css"

const ManageAllItem = ({ item,handelDeleteItem }) => {
  const { productName, price, quantity,_id } = item;
  
  return (
    <tr className="table-details">
      <td>{productName.slice(0, 30)}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={()=>handelDeleteItem(_id)}>X</button>
      </td>
    </tr>
  );
};

export default ManageAllItem;

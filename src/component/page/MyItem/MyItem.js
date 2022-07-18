import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import MyItemDetails from "../MyItemDetails/MyItemDetails";

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {
    const url = `http://localhost:5000/myItem?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, [user]);

  const handelDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure YOU want to delete it?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myItems.filter((item) => item._id !== id);
          if (data.deletedCount > 0) {
            setMyItems(remaining);
          }
        });
    }
  };
  return (
    <div style={{marginBottom:"300px"}}>
      <h2
        className="text-center m-3 border-bottom pb-2"
        style={{ color: "#666", fontWeight: "bold" }}
      >
        MY add item
      </h2>

      <table className="table table-striped table-hover table-bordered container mb-5">
        <thead className="table-header">
          <tr>
            <th scope="col" className="col-md-6">
              Name
            </th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {myItems.map((item) => (
            <MyItemDetails
              key={item._id}
              item={item}
              handelDeleteItem={handelDeleteItem}
            ></MyItemDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItem;

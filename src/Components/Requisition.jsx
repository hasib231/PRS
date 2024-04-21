import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";
import AllProductRow from "./AllProductRow";
import Swal from "sweetalert2";
import RequisitionRow from "./RequisitionRow";

const Requisition = () => {
  const [requestedProduct, setRequestedProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allRequestProduct")
      .then((res) => res.json())
      .then((data) => setRequestedProduct(data));
  }, []);
  console.log(requestedProduct);
  return (
    <>
      <NavBar />
      <MovingComponent
        type="fadeInFromLeft"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="tracking-wider text-bold text-white mt-28 mx-10 bg-gray-800 rounded inline-block px-3 py-1"
      >
        Product List
      </MovingComponent>
      <div className=" ">
        <div className="overflow-x-auto mt-5 mx-10">
          <table className="table border">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Date</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Request Quantity</th>
                <th>Unit</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Remarks</th>
                <th>Status</th>
                <th>PR No</th>
              </tr>
            </thead>
            <tbody>
              {requestedProduct.map((product, index) => (
                <RequisitionRow
                  key={product._id}
                  product={product}
                  index={index}
                ></RequisitionRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Requisition;

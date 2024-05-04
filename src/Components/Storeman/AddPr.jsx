import React, { useEffect, useState } from "react";
import MovingText from "react-moving-text";

import NavBar from "../NavBar";
import useAddPr from "../../hooks/useAddPr";
import AddPrRow from "./AddPrRow";


const AddPr = () => {
    const [addPr, refetch] = useAddPr([]);
    console.log(addPr);
    
  return (
    <>
      <NavBar />
      <MovingText
        type="animation_type"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
        className="mt-11"
      >
        Content...
      </MovingText>
      <div className=" pt-20">
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
              {addPr.map((product, index) => (
                <AddPrRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                ></AddPrRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPr;

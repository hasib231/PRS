import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";
import UserProductRow from "./UserProductRow";

const Request = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
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
        Request Items
      </MovingComponent>
      <div className=" flex flex-col items-center    p-12">
        <div className="w-11/12">
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr>
                  <th className="w-1/12">SN</th>
                  <th className="w-2/12">Item Name</th>
                  <th className="w-2/12">Item Quantity</th>
                  <th className="w-2/12">Remarks</th>
                  <th className="w-4/12 text-justify">Description</th>
                  <th className="w-1/12"></th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((product, index) => (
                  <UserProductRow
                    key={product._id}
                    product={product}
                    index={index}
                  ></UserProductRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;

import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";
import AllProductRow from "./AllProductRow";
import Swal from "sweetalert2";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [allProduct]);

  const handleAddProductData = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const quantity = form.quantity.value;
    const remarks = form.remarks.value;
    const description = form.description.value;

    const productData = {
      productName,
      quantity,
      remarks,
      description,
    };
    // console.log(productData); 
      fetch("http://localhost:5000/addProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Product Added successfully",
              showConfirmButton: false,
              timer: 1500,             
            });
            
          }
          
        });
  };

  
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
        Add New Item
      </MovingComponent>
      <div className="flex flex-col md:flex-row p-12">
        <div className="shadow-lg p-12 rounded-lg md:w-4/12 h-1/3">
          <form onSubmit={handleAddProductData}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Product Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue=""
                placeholder="Product Quantity"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Remarks
                </span>
              </label>
              <input
                type="text"
                name="remarks"
                defaultValue=""
                placeholder="Remarks"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                placeholder="Write the product description"
              ></textarea>
            </div>

            <div className="form-control mt-8 mb-16">
              <input
                className="btn bg-gray-800 text-white btn-block"
                type="submit"
                value="Add "
              />
            </div>
          </form>
        </div>
        <div className="md:w-8/12">
          <div className="overflow-x-auto mt-20 md:mt-0 md:ms-12 ">
            <table className="table border ">
              {/* head */}
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Item Name</th>
                  <th>Item Quantity</th>
                  <th>Remarks</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((product, index) => (
                  <AllProductRow
                    key={product._id}
                    product={product}
                    index={index}
                  ></AllProductRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

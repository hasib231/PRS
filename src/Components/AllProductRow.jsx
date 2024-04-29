import React from 'react';

const AllProductRow = ({ product,index }) => {
    const { _id, productName, quantity, remarks, description } = product;
    return (
      <tr>
        <td className="w-1/12">{index + 1}</td>
        <td className="w-2/12">{productName}</td>
        <td className="w-2/12">{quantity}</td>
        <td className="w-2/12">{remarks}</td>
        <td className="w-5/12 text-justify">{description}</td>

        {/* <td className="">{index + 1}</td>
        <td className="">{productName}</td>
        <td className="">{quantity}</td>
        <td className="">{remarks}</td>
        <td className="w-10 ">
          {description}
        </td> */}
        {/* <td className="w-1/12">
          <button className="btn hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-center text-sm font-semibold text-white outline-none ms-20">
            Update
          </button>
        </td>
        <td className="w-1/12">
          <button className="btn hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-center text-sm font-semibold text-white outline-none ms-20">
            Delete
          </button>
        </td> */}
      </tr>
    );
};

export default AllProductRow;
import React from 'react';

const AllProductRow = ({ product,index }) => {
    const { _id, productName, quantity, remarks, description } = product;
    return (
        <tr>
            <td>{ index+1}</td>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>{remarks}</td>
        <td>{description}</td>
      </tr>
    );
};

export default AllProductRow;
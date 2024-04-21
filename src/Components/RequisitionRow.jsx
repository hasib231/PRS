import React from "react";

const RequisitionRow = ({ product, index }) => {
  const {
    _id,
    date,
    productName,
    quantity,
    remarks,
    requestQuantity,
    status,
    totalPrice,
    unit,
    unitPrice,
    prNo,
    userEmail,
    userName,
  } = product;
  return (
    <tr>
          <td>{index + 1}</td>
          <td>{userName}<br></br>{ userEmail}</td>
          <td>{ date}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{requestQuantity}</td>
      <td>{unit}</td>
      <td>{unitPrice}</td>
      <td>{totalPrice}</td>
      <td>{remarks}</td>
      <td>{status}</td>
      <td>{prNo}</td>
      
    </tr>
  );
};

export default RequisitionRow;

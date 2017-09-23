import React from "react";
import { MdDelete } from "react-icons/lib/md";

const DeleteButton = ({ size = 30, onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      <MdDelete size={size} />
    </button>
  );
};

export default DeleteButton;

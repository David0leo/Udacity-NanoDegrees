import React from "react";
import { MdEdit } from "react-icons/lib/md";

const EditButton = ({ size = 30, onClick }) => {
	return (
		<button className="edit-button" onClick={onClick}>
			<MdEdit size={size} />
		</button>
	);
};

export default EditButton;

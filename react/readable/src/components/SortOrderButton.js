import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/lib/md";

const SortOrderButton = ({
	size = 30,
	sortOrderIsDescending = true,
	sortOrderButtonOnClickCallback = function() {}
}) => {
	return (
		<button
			className="sort-order-button"
			onClick={sortOrderButtonOnClickCallback}
		>
			{sortOrderIsDescending ? (
				<MdArrowDropDown size={size} />
			) : (
				<MdArrowDropUp size={size} />
			)}
		</button>
	);
};

export default SortOrderButton;

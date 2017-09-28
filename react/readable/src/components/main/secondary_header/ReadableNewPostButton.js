import React from "react";
import ReadablePostIcon from "./ReadablePostIcon";
import { MdAddCircle } from "react-icons/lib/md";

const ReadableNewPostButton = ({
	size = 30,
	newPostCallback = function() {}
}) => {
	return (
		<button className="readable-new-post-button" onClick={newPostCallback}>
			<ReadablePostIcon size={size} primaryColor="currentColor" />
			<MdAddCircle size={size} />
		</button>
	);
};

export default ReadableNewPostButton;

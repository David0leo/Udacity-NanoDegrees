import React from "react";
import { MdComment } from "react-icons/lib/md";
import { Link } from "react-router-dom";

const CommentsButton = ({
	commentsCount = 0,
	size = 30,
	to = "/",
}) => {
	return (
		<Link className="comments-button" to={to}>
			<div>
				<MdComment size={size} />
				<p>{commentsCount}</p>
			</div>
		</Link>
	);
};

export default CommentsButton;

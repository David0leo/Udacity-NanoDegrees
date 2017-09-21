import React from "react";
import { MdComment } from "react-icons/lib/md";

const CommentsButton = ({
  commentsCount = 0,
  size = 30,
  onClick = () => {}
}) => {
  return (
    <button className="comments-button" onClick={onClick}>
      <MdComment size={size} />
      <p>{commentsCount}</p>
    </button>
  );
};

export default CommentsButton;

import React from "react";
import NavToggleButton from "../NavToggleButton";
import SortSelector from "../SortSelector";
import ReadableNewPostButton from "../ReadableNewPostButton";

const MainSecondaryHeader = ({
	size,
	newPostCallback,
	sortCallback,
	toggleNavPaneCallback
}) => {
	return (
		<div className="main-secondary-header">
			<div className="nav-toggle-button-container">
				<NavToggleButton
					size={size}
					toggleNavCallback={toggleNavPaneCallback}
				/>
			</div>
			<div className="nav-sort-selector-container">
				<SortSelector
					options={["Vote Score", "Time Posted"]}
					size={size}
					sortCallback={sortCallback}
				/>
			</div>
			<div className="nav-readable-new-post-button-container">
				<ReadableNewPostButton size={size} newPostCallback={newPostCallback} />
			</div>
		</div>
	);
};

export default MainSecondaryHeader;

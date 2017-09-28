import React from "react";
import { connect } from "react-redux";
import { updateCurrentCategory } from "../../actions";
import { getPostsByCategory, getAllPosts } from "../../actions/ApiActions";
import { Link, withRouter } from "react-router-dom";

class MainCategoryNavPane extends React.Component {
	render() {
		return (
			<div
				className="main-category-nav-pane"
				style={
					this.props.navPaneIsOpen
						? { flex: "1", opacity: "1" }
						: { flex: "0", transform: "translateX(-120%)", opacity: "0" }
				}
			>
				<h3>Categories</h3>
				<ol className="nav-pane-categories-list">
					<li
						className={
							this.props.currentCategory === "all"
								? "nav-pane-category-list-item-hover"
								: "nav-pane-category-list-item"
						}
						key={`category_all`}
					>
						<Link to="/">/ all</Link>
					</li>

					{this.props.categories.map(category => (
						<li
							className={
								this.props.currentCategory === category.name
									? "nav-pane-category-list-item-hover"
									: "nav-pane-category-list-item"
							}
							key={`category_${category.path}`}
						>
							<Link to={`/${category.name}`}>/ {category.name}</Link>
						</li>
					))}
				</ol>
			</div>
		);
	}
}

// Get the main state so you know if the nav pane is open,
// and so you know what the current category is
function mapStateToProps({ main, API }) {
	return {
		categoryNavIsOpen: main.categoryNavIsOpen,
		categories: API.categories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateCurrentCategory: data => dispatch(updateCurrentCategory(data)),
		getPostsByCategory: data => dispatch(getPostsByCategory(data)),
		getAllPosts: () => dispatch(getAllPosts())
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MainCategoryNavPane)
);

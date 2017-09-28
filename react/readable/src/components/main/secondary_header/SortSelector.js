import React from "react";
import { MdSort } from "react-icons/lib/md";
import SortOrderButton from "./SortOrderButton";
import { connect } from "react-redux";
import { updateSortBy, toggleSortOrderIsDescending } from "../../../actions";

class SortSelector extends React.Component {
	render() {
		const { options, size, sortOrderIsDescending } = this.props;

		return (
			<div className="sort-selector">
				<MdSort size={size} />
				<select
					onChange={event => {
						this.handleSelectOnChange(event.target.value);
					}}
				>
					{options.map(option => (
						<option value={option} key={`_option_${option}`}>
							{option}
						</option>
					))}
				</select>
				<SortOrderButton
					size={size}
					sortOrderIsDescending={sortOrderIsDescending}
					sortOrderButtonOnClickCallback={this.handleSortOrderToggle}
				/>
			</div>
		);
	}

	handleSelectOnChange = value => {
		this.props.updateSortBy({ sortBy: value });
	};

	handleSortOrderToggle = () => {
		this.props.toggleSortOrderIsDescending();
	};
}

function mapStateToProps({ main }) {
	return {
		sortBy: main.sortBy,
		sortOrderIsDescending: main.sortOrderIsDescending
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateSortBy: data => dispatch(updateSortBy(data)),
		toggleSortOrderIsDescending: data =>
			dispatch(toggleSortOrderIsDescending(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SortSelector);

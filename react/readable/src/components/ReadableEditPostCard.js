import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CheckCircle from "material-ui/svg-icons/action/check-circle";
import HighlightOff from "material-ui/svg-icons/action/highlight-off";
import { orange500, blue500, red500 } from "material-ui/styles/colors";

import ThumbVoter from "./ThumbVoter";
import { postUnixTimeToSimplifiedTimeElapsedString } from "../utils/helpers";

import { toggleEditPostModalIsOpen, initializeEditPost } from "../actions";

const styles = {
	errorStyle: {
		color: orange500
	},
	floatingLabelFocusStyle: {
		color: blue500
	},
	raisedButton: {
		margin: 12
	}
};

function validate(values) {
	const errors = {};
	const requiredFields = ["title", "body"];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = "Required";
		}
	});
	return errors;
}

const renderTextField = ({
	input,
	hintText,
	floatingLabelText,
	meta: { touched, error },
	...custom
}) => (
	<TextField
		hintText={hintText}
		floatingLabelText={floatingLabelText}
		errorText={touched && error}
		errorStyle={styles.errorStyle}
		floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
		{...input}
		{...custom}
	/>
);

class ReadableEditPostCard extends React.Component {
	componentDidMount() {
		// this.props.initialize()
	}

	render() {
		const {
			handleSubmit,
			pristine,
			valid,
			reset,
			post,
			submitting,
			editPostModalIsOpen
		} = this.props;

		const actions = [
			<RaisedButton
				type="submit"
				label="Submit"
				labelPosition="before"
				backgroundColor={blue500}
				labelColor={"#fff"}
				icon={<CheckCircle />}
				style={styles.raisedButton}
				disabled={pristine || submitting || !valid}
				onClick={this.onClickSubmit}
			/>,
			<RaisedButton
				type="submit"
				label="Clear Changes"
				labelPosition="after"
				backgroundColor={orange500}
				labelColor={"#fff"}
				icon={<HighlightOff />}
				style={styles.raisedButton}
				disabled={pristine || submitting}
				onClick={reset}
			/>,
			<RaisedButton
				type="dismiss"
				label="Close"
				labelPosition="after"
				backgroundColor={red500}
				labelColor={"#fff"}
				style={styles.raisedButton}
				disabled={false}
				onClick={this.onDismiss}
			/>
		];

		return (
			<Dialog
				title="Edit Post"
				actions={actions}
				modal={false}
				open={editPostModalIsOpen}
				onRequestClose={this.onDismiss}
			>
				<div className="readable-edit-post-inner-card">
					<form onSubmit={handleSubmit} className="readable-edit-post-form">
						<div className="readable-edit-post-title">
							<Field
								name="title"
								component={renderTextField}
								hintText="Post Title"
								floatingLabelText="Post Title - Max 80 characters"
								multiLine={true}
								rows={1}
								fullWidth={true}
								maxLength={80}
							/>
						</div>
						<div className="readable-edit-post-category">
							{`/${post.category}`}
						</div>
						<div className="readable-edit-post-body">
							<Field
								name="body"
								component={renderTextField}
								hintText="Post Body"
								floatingLabelText="Post Body - Max 500 characters"
								multiLine={true}
								rows={1}
								fullWidth={true}
								maxLength={500}
							/>
						</div>
						<div className="readable-edit-post-author">
							{"Posted "}
							{postUnixTimeToSimplifiedTimeElapsedString(
								Date.now(),
								post.timestamp
							)}{" "}
							by {post.author}
						</div>
					</form>

					<ThumbVoter voteScore={post.voteScore} disabled={true} />
				</div>
			</Dialog>
		);
	}

	onClickSubmit = () => {
		this.props.handleSubmit();
		this.props.reset();
	};

	onDismiss = () => {
		this.props.reset();
		this.props.toggleEditPostModalIsOpen(this.props.post);
	};
}

function mapStateToProps({ main }) {
	return {
		post: main.loadedPost,
		editPostModalIsOpen: main.editPostModalIsOpen
		// initialValues: {
		//   title: main.loadedPost.title,
		//   body: main.loadedPost.body
		// }
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleEditPostModalIsOpen: data => dispatch(toggleEditPostModalIsOpen(data))
	};
}

ReadableEditPostCard = connect(mapStateToProps, mapDispatchToProps)(
	ReadableEditPostCard
);

ReadableEditPostCard = reduxForm({
	form: "readableEditPostCard",
	// enableReinitialize: false,
	validate
})(ReadableEditPostCard);

ReadableEditPostCard = connect(
	state => ({
		initialValues: state.load.loadedPost
	}),
	{ loadPost: initializeEditPost }
)(ReadableEditPostCard);

export default ReadableEditPostCard;

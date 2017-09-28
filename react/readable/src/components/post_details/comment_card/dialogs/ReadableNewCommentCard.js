import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CheckCircle from "material-ui/svg-icons/action/check-circle";
import HighlightOff from "material-ui/svg-icons/action/highlight-off";
import { orange500, blue500, red500 } from "material-ui/styles/colors";
import Dialog from "material-ui/Dialog";

import ThumbVoter from "../../../card_parts/ThumbVoter";
import {
	toggleNewCommentModalIsOpen,
	initializeCommentFormValues
} from "../../../../actions";

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
	const requiredFields = ["author", "body"];
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

class ReadableNewCommentCard extends React.Component {
	render() {
		const {
			handleSubmit,
			pristine,
			valid,
			reset,
			submitting,
			newCommentModalIsOpen
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
				label="Clear"
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
				title="Add Comment"
				actions={actions}
				modal={false}
				open={newCommentModalIsOpen}
				onRequestClose={this.onDismiss}
			>
				<div className="readable-new-comment-inner-card">
					<form onSubmit={handleSubmit} className="readable-new-comment-form">
						<div className="readable-new-comment-author">
							<Field
								name="author"
								component={renderTextField}
								hintText="Name"
								floatingLabelText="Author - Maximum 30 Characters"
								multiLine={true}
								rows={1}
								fullWidth={true}
								maxLength={30}
							/>
						</div>
						<div className="readable-new-comment-body">
							<Field
								name="body"
								component={renderTextField}
								hintText="Comment Body"
								floatingLabelText="Comment Body - Maximum 500 Characters"
								multiLine={true}
								rows={1}
								fullWidth={true}
								maxLength={500}
							/>
						</div>
					</form>
					<ThumbVoter voteScore={1} disabled={true} />
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
		this.props.toggleNewCommentModalIsOpen();
	};
}

function mapStateToProps({ main }) {
	return {
		newCommentModalIsOpen: main.newCommentModalIsOpen
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleNewCommentModalIsOpen: () => dispatch(toggleNewCommentModalIsOpen())
	};
}

ReadableNewCommentCard = connect(mapStateToProps, mapDispatchToProps)(
	ReadableNewCommentCard
);

ReadableNewCommentCard = reduxForm({
	form: "readableNewComment",
	validate
})(ReadableNewCommentCard);

ReadableNewCommentCard = connect(
	state => ({
		initialValues: state.load.comment
	}),
	{ loadComment: initializeCommentFormValues }
)(ReadableNewCommentCard);

export default ReadableNewCommentCard;

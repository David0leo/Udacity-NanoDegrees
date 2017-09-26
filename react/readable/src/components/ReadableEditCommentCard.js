import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CheckCircle from "material-ui/svg-icons/action/check-circle";
import HighlightOff from "material-ui/svg-icons/action/highlight-off";
import { orange500, blue500 } from "material-ui/styles/colors";
import Dialog from "material-ui/Dialog";

import ThumbVoter from "./ThumbVoter";
import {
  toggleEditCommentModalIsOpen,
  initializeEditComment,
} from "../actions";

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
  const requiredFields = ["body"];
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

class ReadableEditCommentCard extends React.Component {
  render() {
    const {
      handleSubmit,
      pristine,
      valid,
      reset,
      submitting,
      comment,
      editCommentModalIsOpen
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
      />
    ];

    return (
      <Dialog
        title="Add Comment"
        actions={actions}
        modal={false}
        open={editCommentModalIsOpen}
        onRequestClose={this.onDismiss}
      >
        <div className="readable-edit-comment-inner-card">
          <form onSubmit={handleSubmit} className="readable-edit-comment-form">
            <div className="readable-edit-comment-author">
              {comment.author}
            </div>
            <div className="readable-edit-comment-body">
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
    this.props.handleSubmit()
    this.props.reset()
  }

  onDismiss = () => {
    this.props.reset()
    this.props.toggleEditCommentModalIsOpen(this.props.comment)
  }
}

function mapStateToProps({ main }) {
  return {
    comment: main.loadedComment,
    editCommentModalIsOpen: main.editCommentModalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditCommentModalIsOpen: () => dispatch(toggleEditCommentModalIsOpen())
  }
}



ReadableEditCommentCard = connect(mapStateToProps, mapDispatchToProps)(
  ReadableEditCommentCard
)

ReadableEditCommentCard = reduxForm({
  form: 'readableEditComment',
  validate
})(ReadableEditCommentCard)

ReadableEditCommentCard = connect(
  state => ({
    initialValues: state.load.loadedComment
  }),
  { loadComment: initializeEditComment }
)(ReadableEditCommentCard)

export default ReadableEditCommentCard
import React from "react";
import ThumbVoter from "./ThumbVoter";
import { addPost } from "../actions";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import {orange500, blue500, red500} from 'material-ui/styles/colors';
import validate from "../validate";

// Using some code from the redux-form site
// http://redux-form.com/6.6.3/examples/material-ui/

const styles = {
  errorStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  },
  raisedButton: {
    margin: 12,
  },
}

const renderTextField = ({
  input,
  hintText,
  floatingLabelText,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    errorText={touched && error}
    errorStyle={styles.errorStyle}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    {...input}
    {...custom}
  />;

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) =>
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />;

let ReadableNewPostCard = props => {
  const { handleSubmit, pristine, reset, submitting, categories } = props;

  return (
    <div className="readable-new-post-card">
      <div className="readable-new-post-inner-card">
      <form onSubmit={handleSubmit} className="readable-new-post-form">
        <div className="readable-new-post-title">
          <Field
            name="postTitle"
            component={renderTextField}
            hintText="Post Title"
            floatingLabelText="Post Title - Maximum 50 characters"
            multiLine={true}
            rows={1}
            fullWidth={true}
            maxLength={50}
          />
        </div>
        <div className="readable-new-post-category">
          <Field
            name="postCategory"
            component={renderSelectField}
            label="Post Category"
          >
            {categories.map(category =>
              <MenuItem
                value={category}
                primaryText={`/${category}`}
                key={`_addPostCategory_${category}`}
              />
            )}
          </Field>
        </div>
        <div className="readable-new-post-body">
          <Field
            name="postBody"
            component={renderTextField}
            hintText="Post Body"
            floatingLabelText="Post Body - Maximum 500 Characters"
            multiLine={true}
            rows={1}
            fullWidth={true}
            maxLength={500}
          />
        </div>
        <div className="readable-new-post-name">
          <Field
            name="postName"
            component={renderTextField}
            hintText="Name"
            floatingLabelText="Name - Maximum 50 Characters"
            multiLine={true}
            rows={1}
            fullWidth={true}
            maxLength={50}
          />
        </div>
      </form>
      <ThumbVoter voteScore={0} disabled={true} />
      </div>
      
      <div>
        <RaisedButton
          type="submit"
          label="Submit"
          labelPosition="before"
          backgroundColor={blue500}
          labelColor={"white"}
          icon={<CheckCircle />}
          style={styles.raisedButton}
          disabled={pristine ||submitting}
          />
          <RaisedButton
          type="submit"
          label="Clear"
          labelPosition="after"
          backgroundColor={orange500}
          labelColor={"white"}
          icon={<HighlightOff />}
          style={styles.raisedButton}
          disabled={pristine ||submitting}
          onClick={reset}
          />
        {/* <button type="submit" disabled={pristine || submitting}>
          Submit
        </button> */}
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button> */}
      </div>
    </div>
  );
};

function mapStateToProps({ main }) {
  return { categories: main.categories };
}

function mapDispatchToProps(dispatch) {
  return { addPost: data => dispatch(addPost(data)) };
}

ReadableNewPostCard = connect(mapStateToProps, mapDispatchToProps)(
  ReadableNewPostCard
);

export default reduxForm({
  form: "readableNewPostCard",
  validate
})(ReadableNewPostCard);

// export default reduxForm({
//   form: 'MaterialUiForm', // a unique identifier for this form
//   validate,
//   asyncValidate,
// })(MaterialUiForm);

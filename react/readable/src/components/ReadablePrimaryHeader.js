import React from "react";
import ReadableIcon from "./ReadableIcon";
import { connect } from "react-redux";

class ReadablePrimaryHeader extends React.Component {
  render() {
    return (
      <div className="readable-primary-header">
        {/* TODO: Wrap up in a link and route to the main page if clicked icon or
              if clicked the Readable Title
     */}
        <ReadableIcon
          size={50}
          primaryColor={"white"}
          secondaryColor={"currentColor"}
        />
        <h1 className="app-title">Readable</h1>
        {/* TODO: Wrap category in link, to refresh that category view */}
        <h2 className="app-category">/{this.props.currentCategory}</h2>
      </div>
    );
  }
}

function mapStateToProps({ main }) {
  return {
    currentCategory: main.currentCategory
  };
}

export default connect(mapStateToProps)(ReadablePrimaryHeader);

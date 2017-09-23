import React from "react";
import {Link} from 'react-router-dom';
import ReadableIcon from "./ReadableIcon";

class ReadablePrimaryHeader extends React.Component {
  render() {
    return (
      <div className="readable-primary-header">
        <ReadableIcon
          size={50}
          primaryColor={"white"}
          secondaryColor={"currentColor"}
        />
        <Link className="app-title" to='/'>Readable</Link>
        {/* TODO: Wrap category in link, to refresh that category view */}
        <Link className="app-category" to={`/${this.props.currentCategory === "all" ? "" : this.props.currentCategory}`}>
          /{this.props.currentCategory}
        </Link>
      </div>
    );
  }
}

export default ReadablePrimaryHeader;

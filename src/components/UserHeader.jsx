import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    console.log(this.props);
    if (!this.props.user) {
      return null;
    }

    return (
      <div>
        <b>Author:</b> {this.props.user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps)(UserHeader);

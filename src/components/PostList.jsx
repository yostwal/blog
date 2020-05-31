import React, { Component } from "react";
import { connect } from "react-redux";

export class PostList extends Component {
  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

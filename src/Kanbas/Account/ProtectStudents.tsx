import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";

type ProtectedStudentsProps = {
  role: string;
  children: ReactNode;
};

class ProtectedStudents extends Component<ProtectedStudentsProps> {
  render() {
    const { role, children } = this.props;

    if (role === "STUDENT") {
      return children;
    }

    return null;
  }
}

const mapStateToProps = (state: any) => ({
  role: state.accountReducer.currentUser?.role,
});

export default connect(mapStateToProps)(ProtectedStudents);

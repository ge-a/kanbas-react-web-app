import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";

type ProtectedButtonProps = {
  role: string;
  children: ReactNode;
};

class ProtectedButton extends Component<ProtectedButtonProps> {
  render() {
    const { role, children } = this.props;

    if (role === "FACULTY") {
      return children;
    }

    return null;
  }
}

const mapStateToProps = (state: any) => ({
  role: state.accountReducer.currentUser?.role,
});

export default connect(mapStateToProps)(ProtectedButton);

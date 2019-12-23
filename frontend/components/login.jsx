import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Login page</div>;
  }
}

const msp = state => ({
  // photos: state.photos
});

const mdp = dispatch => ({
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(Login);

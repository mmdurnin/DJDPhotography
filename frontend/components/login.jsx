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
  // fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(msp, mdp)(Login);

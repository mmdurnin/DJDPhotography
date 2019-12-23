import React from "react";
import Login from './login';
import Redirect from './redirect';
import { clearErrors } from "../../actions/session_actions";
import { connect } from "react-redux";

class LoginRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    console.log(this.props);
    return (
      <div className="login-box">
        {
            this.props.loggedIn ? (
                <Redirect />
            ) : (
                <Login />
            )
        }
      </div>
    );
  }
}

const msp = state => ({
  loggedIn: state.session.admin === "Dermot"
});

const mdp = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(LoginRouter);

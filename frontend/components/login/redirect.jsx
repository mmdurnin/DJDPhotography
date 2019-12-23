import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.history.push("/")
  }

  render() {
    console.log(this.props);
    return (
      <div className="box">
          <h1>You're already logged in!</h1>
          <button onClick={this.handleSubmit} >Home</button>
      </div>
    );
  }
}

const msp = (state) => ({
});

const mdp = dispatch => ({
});

export default withRouter(connect(msp, mdp)(Login));

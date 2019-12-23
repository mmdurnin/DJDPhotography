import React from "react";
import { login, clearErrors } from '../actions/session_actions';
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: "", password: ""}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props
      .login(this.state)
      .then(() => this.props.history.push("/"))
      .fail(console.log("this is an invalid username/password"))
  }

  update(field) {
      return e => {
          this.setState({ [field]: e.currentTarget.value})
      }
  }

  render() {
    console.log(this.props)
    return (
      <div className="login-box">
        <form className="column" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className="login-input"
            type="text"
            onChange={this.update("username")}
            placeholder="Username"
            value={this.state.username}
          />

          <input
            className="login-input"
            type="password"
            onChange={this.update("password")}
            placeholder="Password"
            value={this.state.password}
          />

          <input type="submit" className="login-submit" value="Submit" />

        </form>
      </div>
    );
  }
}

const msp = state => ({
    errors: state.errors.session

});

const mdp = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(Login);

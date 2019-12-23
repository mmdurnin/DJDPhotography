import React from "react";
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
      .fail((e) => e.preventDefault())
  }

  update(field) {
      return e => {
          this.setState({ [field]: e.currentTarget.value})
      }
  }

  render() {
    return (
      <div className="login-box">
        <form onSubmit={(e) => this.handleSubmit(e)}>
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

});

const mdp = dispatch => ({
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(Login);

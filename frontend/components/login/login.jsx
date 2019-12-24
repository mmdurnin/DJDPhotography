import React from "react";
import { login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: "", password: ""}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.clearErrors();
  }

  handleSubmit(e) {
    this.props
      .login(this.state)
      .then(() => {
        const adminOptions = document.getElementById("admin-options-box");
        adminOptions.className = "admin-options-box column"

        const deleteButtons = document.getElementsByClassName("delete-button");
        Array.from(deleteButtons).forEach((button) => {
          console.log(!!button)
          button.className = "delete-button"
        })
        
        this.props.history.push("/")})
      .fail(() => this.render())
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
          
          <h4>{this.props.errors}</h4>

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

export default withRouter(connect(msp, mdp)(Login));

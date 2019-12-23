import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";

class AdminOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: this.props.loggedIn };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const adminOptions = document.getElementById("admin-options-box");
    console.log(adminOptions)
    if (this.props.loggedIn) {
        adminOptions.classList.remove("inactive")
    } else {
      adminOptions.className = "admin-options-box column inactive";
    }
  }

  handleLogout() {
    this.props.logout();
    const adminOptions = document.getElementById("admin-options-box");
    adminOptions.classList.add("inactive")
  }

  render() {
    console.log("this.props")
    console.log(this.props);
    console.log("this state")
    console.log(this.state);

    return (
      <div className="admin-options-box column inactive" id="admin-options-box">
        <button className="logout-button" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

const msp = state => {
  return {
    loggedIn: state.session.admin === "Dermot"
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(AdminOptions);

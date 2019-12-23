import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import { addPhoto } from '../actions/photo_actions';
import ImageUpload from './image_upload';

class AdminOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const adminOptions = document.getElementById("admin-options-box");
    if (this.props.loggedIn) {
        adminOptions.classList.remove("hidden")
        adminOptions.classList.add("admin-options-box");
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

    return (
      <div className="column hidden" id="admin-options-box">
        <ImageUpload addPhoto={this.props.addPhoto} />
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
  logout: () => dispatch(logout()),
  addPhoto: (photo) => dispatch(addPhoto(photo))
});

export default connect(msp, mdp)(AdminOptions);

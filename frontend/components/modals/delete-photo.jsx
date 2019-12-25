import React from 'react';
import { deletePhoto } from "../../actions/photo_actions";
import { connect } from 'react-redux';

class DeletePhotoModal extends React.Component {
    constructor(props) {
        super(props)

        this.closeModal = this.closeModal.bind(this)
        this.deleteImage = this.deleteImage.bind(this)
    }

    componentDidUpdate() {
        console.log("this.props")
        console.log(this.props)
    }

    closeModal(e) {
        const deleteImgModal = document.getElementById("delete-img-modal");
        deleteImgModal.className = "inactive";
    }

    deleteImage() {
        this.props.deletePhoto(this.props.targetId);
        this.closeModal();
    }

    render() {
        return (
          <div className="inactive" id="delete-img-modal">
            <div className="warning-modal" id="warning-modal" >
              <h1>Are you sure you want to delete this photo?</h1>
              <button onClick={() => this.deleteImage()} >Delete photo</button>
              <button onClick={this.closeModal} >I changed my mind.</button>
            </div>
          </div>
        );
    }
}

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({
  deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(msp, mdp)(DeletePhotoModal)
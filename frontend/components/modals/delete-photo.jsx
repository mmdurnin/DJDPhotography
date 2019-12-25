import React from 'react';
import { deletePhoto } from "../../actions/photo_actions";
import { connect } from 'react-redux';

class DeletePhotoModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (<div>test</div>)
        // return (
        //   <div className="inactive" id="delete-img-modal">
        //     {/* <div className="warning-modal">
        //       <h1>Are you sure you want to delete this photo?</h1>
        //       <button>Delete photo</button>
        //       <button>I changed my mind.</button>
        //     </div> */}
        //   </div>
        // );
    }
}

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({
  deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(msp, mdp)(DeletePhotoModal)
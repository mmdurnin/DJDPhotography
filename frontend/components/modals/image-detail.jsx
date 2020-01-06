import React from 'react';
import { connect } from 'react-redux';

class ImageDetailModal extends React.Component {
    constructor(props) {
        super(props)

        this.closeModal = this.closeModal.bind(this)
    }

    componentDidUpdate() {
        console.log("this.props")
        console.log(this.props)
    }

    closeModal(e) {
        const photoModal = document.getElementById("photo-modal");
        photoModal.className = "inactive";
    }

    render() {

        if (this.props.photoItem === undefined) return null;

        return (
            <div className="modal" id="photo-modal">
                <button className="close-modal" onClick={this.closeModal}>X</button>
                <div className="inner-modal image-modal row" id="inner-modal" >
                    <div className="photo-modal-left">
                        <h1>{this.props.photoItem.name}</h1>
                        <img src={this.props.photoItem.photo} />
                    </div>
                    <div className="photo-modal-right">
                        <h2>{this.props.photoItem.name}</h2>
                        <br/>
                        <p>{this.props.photoItem.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const msp = (state, ownProps) => ({
    photoItem: state.entities.photos[ownProps.targetId]
})

const mdp = dispatch => ({

});

export default connect(msp, mdp)(ImageDetailModal)
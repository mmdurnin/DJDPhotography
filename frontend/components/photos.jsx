import React from 'react';
import { fetchPhotos } from '../actions/photo_actions';
import DeletePhotoModal from './modals/delete-photo';
import ImageDetailModal from './modals/image-detail';
import { connect } from 'react-redux';


class Photos extends React.Component {
    constructor(props) {
        super(props)

        this.state = { id: "", imageOpen: false };
        this.handleModal = this.handleModal.bind(this);
        this.enlargeImage = this.enlargeImage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    handleModal(id) {
      if (!this.props.loggedIn) return

      const deleteImgModal = document.getElementById("delete-img-modal")
      console.log(!!deleteImgModal)
      deleteImgModal.className = "modal"
      this.setState({id: id})
      deleteImgModal.setAttribute("targetId", `${id }`)
    }

    enlargeImage(imageId) {
      // const photoDetail = document.getElementById("photo-modal")
      // photoDetail.className = "modal"
      this.setState({id: imageId})
      // photoDetail.setAttribute("targetId", `${imageId}`)
    }

    render() {
        if (this.props.photos === undefined) return null;

        let deleteButtonClass = "delete-button"
        if (!this.props.loggedIn) deleteButtonClass = "delete-button hidden"

        // const component = (!!this.state.imageOpen) ? <ImageDetailModal targetId={this.state.id} /> : <DeletePhotoModal targetId={this.state.id} />

        console.log("this.props")
        console.log(this.props)


        return (
          <div>
            <DeletePhotoModal targetId={this.state.id} />
            <ImageDetailModal targetId={this.state.id} />

            {/* {component} */}

            <div className="image-index" id="image-index">
              {this.props.photos.map((item, idx) => {
                return (
                  <div className="img-index-item" key={idx}>
                    <button
                      className={deleteButtonClass}
                      onClick={() => this.handleModal(item.id)}
                    >
                      x
                    </button>
                    <img src={item.photo} key={idx} onClick={() => this.enlargeImage(item.id)} />
                  </div>
                );
              })}

            </div>
          </div>
        );
    }
}

const msp = (state) => {
    console.log(state)
    return {
      photos: Object.values(state.entities.photos),
      loggedIn: state.session.admin === "Dermot"
    };
}

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(msp, mdp)(Photos);
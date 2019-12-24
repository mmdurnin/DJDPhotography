import React from 'react';
import { fetchPhotos, deletePhoto } from '../actions/photo_actions';
import { connect } from 'react-redux';


class Photos extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        if (this.props.photos === undefined) return null;

        console.log("this.props")
        console.log(this.props)


        return (
          <div>

            <div className="warning-modal">
                <h1>Are you sure you want to delete this photo?</h1>
                <button>Delete photo</button>
                <button>I changed my mind.</button>
            </div>

            <div className="image-index" id="image-index">
              {this.props.photos.map((item, idx) => {
                return (
                  <div className="img-index-item" key={idx}>
                    <button className="delete-button hidden">x</button>
                    <img src={item.photo} key={idx} />
                  </div>
                );
              })}

              {this.props.photos.map((item, idx) => {
                return (
                  <div className="img-index-item" key={idx + 20}>
                    <img src={item.photo} key={idx + 20} />
                  </div>
                );
              })}

              {this.props.photos.map((item, idx) => {
                return (
                  <div className="img-index-item" key={idx + 40}>
                    <img src={item.photo} key={idx + 40} />
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
    fetchPhotos: () => dispatch(fetchPhotos()),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
})

export default connect(msp, mdp)(Photos);
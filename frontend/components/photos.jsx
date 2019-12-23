import React from 'react';
import { connect } from 'react-redux';


class Photos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const images = []
        for (let i = 1; i < 13; i++) {
            images.push(
              <div className="img-index-item">
                <img
                  src={window.imgArray[i]}
                  key={i}>
                </img>
              </div>
            );
        }

        return (
          <div className="image-index">
            {images}
          </div>
        );
    }
}

const msp = (state) => {
    console.log(state)
    // photos: state.photos
    return {

    }
}

const mdp = dispatch => ({
    // fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(msp, mdp)(Photos);
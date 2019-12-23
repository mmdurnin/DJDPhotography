import React from 'react';
import { fetchPhotos } from '../actions/photo_actions';
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

        const images = [];
        for (let i = 0; i < 11; i++) {
            images.push(
              <div className="img-index-item">
                <img src={window.imgArray[i]}></img>
              </div>
            );
        }

        for (let i = 0; i < 12; i++) {
            
            images.push(
              <div className="img-index-item">
                <img src={window.imgArray[i]}></img>
              </div>
            );
        }


        return (
          <div>
            <div className="image-index" id="image-index">
              {images}
            </div>
          </div>
        );
    }
}

const msp = (state) => {
    console.log(state)
    return {
      photos: state.entities.photos
    };
}

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(msp, mdp)(Photos);
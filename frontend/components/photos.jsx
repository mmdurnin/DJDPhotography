import React from 'react';
import { connect } from 'react-redux';

class Photos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Photos page</div>
        )
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
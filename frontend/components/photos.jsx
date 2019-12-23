import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroller";


class Photos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }
    
    loadFunc() {
        const imageIndex = document.getElementById("image-index")
        let item;
        let img;
        for (let i = 0; i < 12; i++) {
            item = document.createElement("div")
            item.classList.add("img-index-item")
            img = document.createElement("IMG")
            img.setAttribute("src", `${window.imgArray[i]}`);
            item.appendChild(img)
            imageIndex.appendChild(item)            
        }
    }

    render() {

        const images = [];
        for (let i = 0; i < 11; i++) {
            images.push(
              <div className="img-index-item">
                <img src={window.imgArray[i]}></img>
              </div>
            );
        }

        for (let i = 0; i < 12; i++) {
            images.push(<img src={window.imgArray[i]}></img>);
        }


        return (
          <div>
            <div className="image-index" id="image-index">
              {images}
            </div>
            <InfiniteScroll
            pageStart={0}
            loadMore={this.loadFunc}
            hasMore={true || false}
            loader={
                <div className="loader" key={0}>
                Loading ...
                </div>
            }
            >
            {images}
            </InfiniteScroll>
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
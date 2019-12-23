import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_PHOTOS= "RECEIVE_PHOTOS";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const fetchPhotos = () => dispatch => {
  return PhotoAPIUtil.fetchPhotos()
    .then(
    photos => dispatch(receivePhotos(photos))
  );
};

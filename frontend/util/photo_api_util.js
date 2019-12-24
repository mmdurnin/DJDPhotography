export const fetchPhotos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/photos"
    })
}

export const addPhoto = (photo) => {
  return $.ajax({
    method: "POST",
    url: "/api/photos",
    data: photo,
    contentType: false,
    processData: false
  });
};
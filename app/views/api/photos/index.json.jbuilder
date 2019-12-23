@photos.each do |photo|
    json.set! photo.id do
        json.name photo.name
        json.description photo.description
        json.restaurant_image url_for(@reservation.restaurant.image)
    end
end
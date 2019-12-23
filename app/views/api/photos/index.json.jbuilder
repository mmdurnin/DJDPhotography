@photos.each do |photo|
    json.set! photo.id do
        json.name photo.name
        json.description photo.description
        json.photo url_for(photo.photo.attachment)
    end
end
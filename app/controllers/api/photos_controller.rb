class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all.with_attached_photo
        @photos.each do |photo|
            p photo
        end
        render :index
    end
end

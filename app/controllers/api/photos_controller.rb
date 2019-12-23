class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all.with_attached_photo
        @photos.each do |photo|
            p photo
        end
        render :index
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :index
        end
    end

    private
    def photo_params
        params.require(:photo).permit(:name, :description, :image)
    end
end

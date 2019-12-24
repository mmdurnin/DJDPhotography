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
        # @photo.name = photo_params[:name]
        # @photo.description = photo_params[:description]
        if @photo.save
            @photos = Photo.all.with_attached_photo
            render :index
        end
    end

    private
    def photo_params
        params.require(:photo).permit(:name, :description, :photo)
    end
end

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
            @photos = Photo.all.with_attached_photo
            render :index
        end
    end

    def destroy
        @photo = Photo.find_by(id: params[:id])
        @photo.destroy
        @photos = Photo.all.with_attached_photo
        render :index
    end

    private
    def photo_params
        params.require(:photo).permit(:name, :description, :photo)
    end
end

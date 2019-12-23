class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all.with_attached_image
        render :index
    end
end

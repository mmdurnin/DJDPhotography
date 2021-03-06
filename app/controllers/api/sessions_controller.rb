class Api::SessionsController < ApplicationController

    def create
        if (params[:user][:username] == ENV['USERNAME'] && params[:user][:password] == ENV['PASSWORD'])
            ENV['SESSION_TOKEN'] = SecureRandom::urlsafe_base64
            session[:session_token] = ENV['SESSION_TOKEN']
            render :show
        else
            render json: ["Oops! Wrong username/ password combination."], status: 418
            ENV['SESSION_TOKEN'] = ""
            session[:session_token] = ""
        end
    end 

    def destroy
        logout
    end
end

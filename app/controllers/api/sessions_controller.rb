class Api::SessionsController < ApplicationController

    def create
        if (params[:username] == ENV['USERNAME'] && params[:password] == ENV['PASSWORD'])
            ENV['SESSION_TOKEN'] = SecureRandom::urlsafe_base64
            session[:session_token] = ENV['SESSION_TOKEN']
        else
            render json: ["That's not the right password. Your computer will self destruct in 3.. 2.."]
            ENV['SESSION_TOKEN'] = ""
            session[:session_token] = ""
        end
    end 

    def destroy
        logout
    end
end

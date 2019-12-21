class ApplicationController < ActionController::Base

    helper_method :logged_in?

    def logged_in? 
        !!ENV["SESSION_TOKEN"]
    end

    def require_login  
        redirect_to :root unless logged_in?
    end


end

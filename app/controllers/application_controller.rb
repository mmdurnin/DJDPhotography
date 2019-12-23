class ApplicationController < ActionController::Base

    helper_method :logged_in?

    def logged_in? 
        (session[:session_token] == ENV["SESSION_TOKEN"]) && (session[:session_token] != "")
    end

    def require_login  
        redirect_to :root unless logged_in?
    end

    def logout
        ENV["SESSION_TOKEN"] = ""
        session[:session_token] = ""
    end

end

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resource :session, only:[:create, :destroy]
    resources :photos
  end

  root to: "static_pages#root"
end

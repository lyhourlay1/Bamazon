Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults:{ format: :json } do 
    resources :users, only: [:create, :destroy] 
    resource :session, only:[:create, :destroy]
    resources :products, only: [:create, :show, :index] do
      collection do
        get :search, to: "products#search", as: "search"
      end
      resources :reviews, only:[:create, :index, :show, :update, :destroy, :update]
    end
    resources :carts, only:[:show, :create]
    resources :orders, only:[:create, :index, :show, :update, :destroy]
    resources :transactions, only:[:create, :index, :show]

  end

  root to: "static_pages#root"
end

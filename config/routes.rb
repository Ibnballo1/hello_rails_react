Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end
  # Defines the root path route ("/")
  root 'greetings#index'
end

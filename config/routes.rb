Rails.application.routes.draw do
  get 'photo/index'
  get 'home/index'
  get 'animal/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
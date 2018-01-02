Rails.application.routes.draw do
  get 'users/index'

  root 'welcome#index'
  get 'welcome/index'
end

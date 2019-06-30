Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :v1, defaults: { format: 'json'} do
    get 'things', to: 'things#index'
  end

  # Forward non-Ajax and HTML type requests to staticCOntroller#index

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'statis#index'
end

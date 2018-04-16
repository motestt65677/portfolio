Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "welcome#index"
  post "/email" => "welcome#email", as: "email"
  post "/track" => "welcome#track", as: "track"
  get "/visit_log" => "welcome#visit_log", as: "visit_log"
end

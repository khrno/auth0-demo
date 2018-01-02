class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  http_basic_authenticate_with name: ENV['PLATFORM_USER'], password: ENV['PLATFORM_PASSWORD']
end

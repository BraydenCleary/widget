class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  DATA_URLS = YAML.load_file("#{Rails.root}/lib/looker_data.yml")
  protect_from_forgery with: :exception
end

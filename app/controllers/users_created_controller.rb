class UsersCreatedController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new(DATA_URLS["users_created"])
    @response = data_set.response_body
    render json: @response
  end
end

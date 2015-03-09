class AverageUphController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new(DATA_URLS["average_uph"])
    @response = data_set.response_body
    render json: @response
  end
end
class WidgetsController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new(DATA_URLS["operators_uph"])
    @response = data_set.response_body
    render json: @response
  end
end

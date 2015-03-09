class OrdersController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new(DATA_URLS["orders"])
    @response = data_set.response_body
    render json: @response
  end
end
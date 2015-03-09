class TotalBagsReceivedController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new(DATA_URLS["total_bags_received"])
    @response = data_set.response_body
    render json: @response
  end
end

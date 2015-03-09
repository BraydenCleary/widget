class WidgetsController < ApplicationController
  def index
    data_set = LookerWidgetDataSet.new("https://thredupdev.looker.com/looks/CBn5Wcs6V83Nt4XBJ7TTKD9dvwp6XT3w.json")
    @response = data_set.response_body
    render json: @response
  end
end

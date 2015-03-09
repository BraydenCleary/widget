class LookerWidgetDataSet
  attr_accessor :response_body, :search_key, :search_value

  def initialize(url="", search_key="", search_value="")
    response = HTTParty.get(url)
    @response_body = JSON.parse(response.body)
    @search_key = search_key
    @search_value = search_value
  end

  def search_for_widget_value(search_key, search_value)
    @result = response_body.select{ |entry| entry[search_key] == search_value }
  end
end
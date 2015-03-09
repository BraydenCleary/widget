require 'llooker_sdk'

module LlookerApiConnection
  extend self

  def setup_connection
    settings = LookerWidget.configuration.settings

    Llooker.setup({
      token: settings[:token],
      secret: settings[:secret],
      host: settings[:host],
      post: settings[:port]
    })
  end
end
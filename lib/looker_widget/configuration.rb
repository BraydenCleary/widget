module LookerWidget
  class Configuration
    attr_accessor :settings

    def initialize
      @settings = {
        token: nil,
        secret: nil,
        host: nil,
        port: nil
      }
    end
  end

  class << self
    attr_accessor :configuration
  end

  def self.configuration
    @configuration ||= Configuration.new
  end

  def self.configure
    yield(configuration)
  end
end
class V1::ThingsController < ApplicationController
  def index
    render json: { :things =>[
      {
        :name => 'something',
        :guid => '34234g'
      }
    ]}.to_json
  end
end


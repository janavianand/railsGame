class V1::ResultController < ApplicationController
  def index
    render json: { :result =>[
      {
        :name => 'Andrew',
        :place => 'America',
        :animal => 'Antelope',
        :thing => 'Anklets'
      }]
    }.to_json
  end
end


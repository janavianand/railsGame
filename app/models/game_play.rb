class GamePlay < ApplicationRecord::Base
  belongs_to : user
  belongs_to : game
end

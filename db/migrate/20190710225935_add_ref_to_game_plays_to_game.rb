class AddRefToGamePlaysToGame < ActiveRecord::Migration[5.2]
  def change
    add_reference :game_plays, :game, foreign_key:true
  end
end

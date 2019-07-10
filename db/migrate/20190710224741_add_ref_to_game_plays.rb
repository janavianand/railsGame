class AddRefToGamePlays < ActiveRecord::Migration[5.2]
  def change
    add_reference :game_plays, :user, foreign_key:true
  end
end

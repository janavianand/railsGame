class CreateGamePlays < ActiveRecord::Migration[5.2]
  def change
    create_table :game_plays do |t|
      t.string :name
      t.string :place
      t.string :animal
      t.string :thing
      t.integer:score
      t.timestamps
    end
  end
end

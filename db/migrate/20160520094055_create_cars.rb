class CreateCars < ActiveRecord::Migration
  def change
      create_table :cars do |t|
      t.string  :model
      t.string  :make
      t.integer :user_id
      t.integer :year
      t.integer :style_id
      t.integer :mileage

      t.timestamps
    end
  end
end

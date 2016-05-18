class CreateVehicles < ActiveRecord::Migration
  def change
  	create_table :vehicles do |t|
  		t.string	:model
  		t.string	:make
  		t.integer	:user_id
  		t.integer :year

  		t.timestamps
  	end
  end
end
class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null:false 
      t.text :comment
      t.integer :product_id, null:false
      t.timestamps
    end
    add_index :reviews, :product_id
  end
end

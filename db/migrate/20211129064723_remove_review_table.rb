class RemoveReviewTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :reviews
    create_table :reviews do |t|
      t.integer :rating, null:false 
      t.string :headline, null:false
      t.text :comment, null:false
      t.integer :product_id, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :reviews, :product_id
  end
end

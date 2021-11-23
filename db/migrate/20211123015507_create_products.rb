class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null:false
      t.string :description, null:false
      t.integer :price, null:false
      t.integer :quantity, null:false
      t.string :seller_name, null:false
      t.string :categories,

      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :description
    add_index :products, :price
    add_index :products, :quantity
  end
end

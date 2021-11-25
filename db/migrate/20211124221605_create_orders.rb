class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :product_id, null:false
      t.integer :cart_id, null:false

      t.timestamps
    end
    drop_table :carts
    create_table :carts do |t|
      t.integer :order_id
      t.integer :user_id
      t.timestamps
    end
    add_index :carts, :order_id
  end
end

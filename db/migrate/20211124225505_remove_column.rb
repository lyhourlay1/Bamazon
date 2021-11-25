class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :order_id
  end
end

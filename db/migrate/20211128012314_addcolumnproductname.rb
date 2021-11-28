class Addcolumnproductname < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :product_name, :string, null:false 
  end
end

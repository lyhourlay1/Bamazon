class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.string :product_name, null: false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :transactions, :user_id
  end
end

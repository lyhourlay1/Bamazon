class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column(:products, :unit, :string, null:false)
    remove_column(:products, :categories)
    add_column(:products, :category, :string)
  end
end

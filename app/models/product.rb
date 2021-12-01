# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :string           not null
#  price        :integer          not null
#  quantity     :integer          not null
#  seller_name  :string           not null
#  category     :string
#  unit         :string           not null
#
class Product < ApplicationRecord
    validates :product_name, :description, :price, :quantity, :seller_name, :unit, presence:true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Review

    has_many_attached :photos

end

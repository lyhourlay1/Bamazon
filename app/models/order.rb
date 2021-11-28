# == Schema Information
#
# Table name: orders
#
#  id           :bigint           not null, primary key
#  product_id   :integer          not null
#  cart_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  quantity     :integer          not null
#  product_name :string           not null
#
class Order < ApplicationRecord
    validates :product_id, :cart_id, :product_name, presence: true

    belongs_to :cart,
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Cart

end

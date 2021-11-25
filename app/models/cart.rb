# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    has_many :orders,
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Order 

    
end

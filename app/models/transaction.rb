# == Schema Information
#
# Table name: transactions
#
#  id           :bigint           not null, primary key
#  product_id   :integer          not null
#  quantity     :integer          not null
#  product_name :string           not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Transaction < ApplicationRecord

    validates :product_id, :user_id, :quantity, :product_name, presence:true
    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
   
end

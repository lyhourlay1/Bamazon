# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  headline   :string           not null
#  comment    :text             not null
#  product_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord


    validates :rating, :product_id, :user_id, :comment, :headline, presence:true


    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

end

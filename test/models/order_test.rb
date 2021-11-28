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
require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

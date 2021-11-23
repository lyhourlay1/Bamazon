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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

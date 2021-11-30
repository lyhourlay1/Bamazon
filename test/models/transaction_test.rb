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
require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

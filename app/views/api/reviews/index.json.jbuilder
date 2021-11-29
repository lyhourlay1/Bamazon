@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :product_id, :comment, :headline, :user_id, :rating
  end
end
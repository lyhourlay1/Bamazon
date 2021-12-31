@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :product_id, :comment, :headline, :user_id, :rating, :username, :created_at
  end
end
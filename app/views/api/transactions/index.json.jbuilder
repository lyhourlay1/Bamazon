@transactions.each do |transaction|
  json.set! transaction.id do
    json.extract! transaction, :id, :user_id, :product_id, :product_name, :quantity
  end
end
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :description, :price, :quantity, :seller_name, :category, :unit
  end
end

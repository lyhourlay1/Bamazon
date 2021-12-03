@orders.each_with_index do |order, index|
  json.set! order.id do
    json.extract! order, :id, :product_id, :cart_id, :quantity, :product_name
    json.photoUrls @products[index].photos.map {|file| url_for(file)}
    json.price @products[index].price
  end
end
